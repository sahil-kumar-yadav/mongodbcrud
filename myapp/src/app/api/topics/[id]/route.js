import { connectDB } from "@/lib/mongodb";
import Topic from "@/models/Topic";
import { NextResponse } from "next/server";
import { topicSchema } from "@/lib/validations";

export async function GET(_, { params }) {
  await connectDB();
  const topic = await Topic.findById(params.id);
  if (!topic) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(topic);
}

export async function PUT(req, { params }) {
  try {
    const body = await req.json();
    const parsed = topicSchema.parse(body);

    await connectDB();
    const updated = await Topic.findByIdAndUpdate(params.id, parsed, { new: true });
    if (!updated) return NextResponse.json({ error: "Not found" }, { status: 404 });

    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function DELETE(_, { params }) {
  await connectDB();
  const deleted = await Topic.findByIdAndDelete(params.id);
  if (!deleted) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ success: true });
}
