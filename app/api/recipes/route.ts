import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import Recipe from "@/models/Recipe";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search");

  await dbConnect();

  const query: Record<string, unknown> = { userId: (session.user as { id: string }).id };
  if (search) query.name = { $regex: search, $options: "i" };

  const recipes = await Recipe.find(query).sort({ createdAt: -1 });
  return NextResponse.json(recipes);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    await dbConnect();
    const recipe = await Recipe.create({ ...body, userId: (session.user as { id: string }).id });
    return NextResponse.json(recipe, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create recipe" }, { status: 500 });
  }
}
