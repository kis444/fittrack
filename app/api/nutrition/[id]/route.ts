import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import NutritionLog from "@/models/NutritionLog";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const body = await req.json();
    await dbConnect();
    const log = await NutritionLog.findOneAndUpdate(
      { _id: params.id, userId: (session.user as { id: string }).id },
      body,
      { new: true }
    );
    if (!log) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(log);
  } catch {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await dbConnect();
  await NutritionLog.findOneAndDelete({ _id: params.id, userId: (session.user as { id: string }).id });
  return NextResponse.json({ success: true });
}
