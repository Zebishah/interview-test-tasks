import mongoose from "mongoose";
const Schema = mongoose.Schema;
let BookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  no_Of_Pages: {
    type: Number,
    required: true,
  },
  published_At: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Book", BookSchema);
