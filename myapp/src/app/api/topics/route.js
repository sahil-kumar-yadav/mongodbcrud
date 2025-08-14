import { connectDB } from "@/lib/mongodb";
import Topic from "@/models/Topic";
import { NextResponse } from "next/server";
import { topicSchema } from "@/lib/validations";

export async function GET() {
  await connectDB();
  const topics = await Topic.find().sort({ createdAt: -1 });
  return NextResponse.json(topics);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const parsed = topicSchema.parse(body);

    await connectDB();
    const newTopic = await Topic.create(parsed);

    return NextResponse.json(newTopic, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: err.errors ? err.errors[0].message : err.message },
      { status: 400 }
    );
  }
}
