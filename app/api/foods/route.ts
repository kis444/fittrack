import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import Food from "@/models/Food";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search");

  await dbConnect();

  const query: Record<string, unknown> = { userId: (session.user as { id: string }).id };
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { brand: { $regex: search, $options: "i" } },
    ];
  }

  const foods = await Food.find(query).sort({ name: 1 });
  return NextResponse.json(foods);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    await dbConnect();

    const food = await Food.create({
      ...body,
      userId: (session.user as { id: string }).id,
    });

    return NextResponse.json(food, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to create food" }, { status: 500 });
  }
}
