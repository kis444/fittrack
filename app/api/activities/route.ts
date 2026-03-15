import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import Activity from "@/models/Activity";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await dbConnect();
  const activities = await Activity.find({ userId: (session.user as { id: string }).id }).sort({ name: 1 });
  return NextResponse.json(activities);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    await dbConnect();

    const activity = await Activity.create({
      ...body,
      userId: (session.user as { id: string }).id,
    });

    return NextResponse.json(activity, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to create activity" }, { status: 500 });
  }
}
