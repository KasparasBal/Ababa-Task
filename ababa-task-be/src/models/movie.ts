import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  studio: {
    type: String,
  },
  releaseDate: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  genres: {
    type: Array,
  },
  voteCount: {
    type: Number,
  },
});

export const MovieModel = mongoose.model("Movie", MovieSchema);
