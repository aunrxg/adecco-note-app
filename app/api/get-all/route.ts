import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import Note from "@/models/Note";

export async function GET() {
  await connectDB();
  const [users, notes] = await Promise.all([User.find({}), Note.find({})]);
  return NextResponse.json({ users, notes });
}
