import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import WeightEntry from "@/models/WeightEntry";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get("limit") || "90");

  await dbConnect();
  const entries = await WeightEntry.find({ userId: (session.user as { id: string }).id })
    .sort({ date: -1 })
    .limit(limit);
  return NextResponse.json(entries.reverse());
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
