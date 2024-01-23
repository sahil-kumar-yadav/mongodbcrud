// first we will write code to create topic

import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";


export async function POST(request) {
    const { title, description } = await request.json();
    // now we need to connect to our database
    await connectMongoDB();


    // create the topic
    await Topic.create({ title, description });

    // return a next response

    return NextResponse.json({ message: "Topic Created" }, { status: 201 });

}


// get
export async function GET() {
    await connectMongoDB();
    // saare topics varible my store karva lenge
    const topics = await Topic.find();
    return NextResponse.json({ topics });
}

// delete 

export async function DELETE(request){
    // to delete we need to send id of topic
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"Topic deleted"},{status:200});

}

// to update we will use dynamic route