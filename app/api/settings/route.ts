import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await dbConnect();
  const user = await User.findById((session.user as { id: string }).id);
  if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({
    name: user.name,
    email: user.email,
    weightGoal: user.weightGoal,
    startWeight: user.startWeight,
    dailyCalorieTarget: user.dailyCalorieTarget,
    proteinTarget: user.proteinTarget,
  });
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    await dbConnect();

    const updateData: Record<string, unknown> = {
      name: body.name,
      weightGoal: body.weightGoal,
      startWeight: body.startWeight,
      dailyCalorieTarget: body.dailyCalorieTarget,
      proteinTarget: body.proteinTarget,
    };

    if (body.password) {
      updateData.password = await bcrypt.hash(body.password, 12);
    }

    const user = await User.findByIdAndUpdate(
      (session.user as { id: string }).id,
      updateData,
      { new: true }
    );

    return NextResponse.json({ message: "Settings updated", name: user?.name });
  } catch {
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
  }
}
