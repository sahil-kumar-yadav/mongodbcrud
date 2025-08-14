import mongoose from "mongoose";

const TopicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: 3,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minlength: 5,
  },
}, { timestamps: true });

export default mongoose.models.Topic || mongoose.model("Topic", TopicSchema);
