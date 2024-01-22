// first we will write code to create topic

import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";


export async function POST(request) {
    const { title, description } = await request.json();
    // now we need to connect to our database
    await connectMongoDB();


    // create the topic
    await Topic.create({ title, description })

    // return a next response

    return NextResponse.json({ message: "Topic Created" }, { status: 201 })

}