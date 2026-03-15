import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import WeightEntry from "@/models/WeightEntry";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const days = parseInt(searchParams.get("days") || "0");
  const all = searchParams.get("all") === "true";

  await dbConnect();

  const query: Record<string, unknown> = { userId: (session.user as { id: string }).id };

  // Filter by actual date range (not entry count) when days param is provided
  if (days > 0) {
    const since = new Date();
    since.setDate(since.getDate() - days);
    since.setHours(0, 0, 0, 0);
    query.date = { $gte: since };
  }

  const entries = await WeightEntry.find(query)
    .sort({ date: all ? 1 : -1 })
    .limit(all ? 0 : 500); // no limit when fetching all

  // Return in chronological order
  return NextResponse.json(all ? entries : entries.reverse());
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    await dbConnect();
    const entry = await WeightEntry.create({
      ...body,
      userId: (session.user as { id: string }).id,
    });
    return NextResponse.json(entry, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to log weight" }, { status: 500 });
  }
}