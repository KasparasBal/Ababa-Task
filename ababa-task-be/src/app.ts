import express from "express";
import bodyParser from "body-parser";
import moviesRoutes from "./routes/movies.routes";
import userRoutes from "./routes/user.routes";
import personalMovieRoutes from "./routes/personalMovies.routes";
import genreRoutes from "./routes/genres.routes";
import yearRoutes from "./routes/years.routes";
import dotenv from "dotenv";

dotenv.config();

const mongoose = require("mongoose");
const cors = require("cors");

const app: express.Application = express();

export const connectToMongoDb = (): void => {
  const connectionOptions: any = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  if (process.env.MONGO_URL) {
    mongoose.connect(process.env.MONGO_URL, connectionOptions);
    console.log("Successfully connected to MongoDB");
  } else {
    console.error("Mongo URL not found");
  }
};

app.use(cors());
app.use(bodyParser.json());

app.use("/movies", moviesRoutes);
app.use("/auth", userRoutes);
app.use("/personal-movies", personalMovieRoutes);
app.use("/", genreRoutes);
app.use("/", yearRoutes);

app.listen(8000, () => {
  console.log("Server is Running on 8000");
  connectToMongoDb();
});
