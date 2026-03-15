import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import WeightEntry from "@/models/WeightEntry";

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await dbConnect();
  await WeightEntry.findOneAndDelete({ _id: params.id, userId: (session.user as { id: string }).id });
  return NextResponse.json({ success: true });
}
