// here we write code to create a schema

import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
    {
        title: String,
        description: String,
    },
    {
        timestamps: true,
    }
);


// phele hai to vo use karlo varna create kardo
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
