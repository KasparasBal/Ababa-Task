"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToMongoDb = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const movies_routes_1 = __importDefault(require("./routes/movies.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const genres_routes_1 = __importDefault(require("./routes/genres.routes"));
const years_routes_1 = __importDefault(require("./routes/years.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose = require("mongoose");
const cors = require("cors");
const app = (0, express_1.default)();
const connectToMongoDb = () => {
    const connectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    if (process.env.MONGO_URL) {
        mongoose.connect(process.env.MONGO_URL, connectionOptions);
        console.log("Successfully connected to MongoDB");
    }
    else {
        console.error("Mongo URL not found");
    }
};
exports.connectToMongoDb = connectToMongoDb;
app.use(cors());
app.use(body_parser_1.default.json());
app.use("/movies", movies_routes_1.default);
app.use("/auth", user_routes_1.default);
app.use("/", genres_routes_1.default);
app.use("/", years_routes_1.default);
app.listen(8000, () => {
    console.log("Server is Running on 8000");
    (0, exports.connectToMongoDb)();
});
//# sourceMappingURL=app.js.map