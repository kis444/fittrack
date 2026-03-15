import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import Task from "@/models/Task";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const dateFrom = searchParams.get("dateFrom");
  const dateTo = searchParams.get("dateTo");

  await dbConnect();

  const query: Record<string, unknown> = { userId: (session.user as { id: string }).id };

  if (dateFrom || dateTo) {
    query.date = {};
    if (dateFrom) (query.date as Record<string, unknown>).$gte = new Date(dateFrom);
    if (dateTo) (query.date as Record<string, unknown>).$lte = new Date(dateTo);
  }

  const tasks = await Task.find(query).sort({ date: 1, startTime: 1 });
  return NextResponse.json(tasks);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    await dbConnect();

    const task = await Task.create({
      ...body,
      userId: (session.user as { id: string }).id,
    });

    return NextResponse.json(task, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to create task" }, { status: 500 });
  }
}
