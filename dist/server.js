"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
//Middlewares
const { cardRouter } = require("./routes/card.route");
app.use(express_1.default.json());
app.use("/findcard", cardRouter);
//Routes
//Init app / Connect to DB
const initApp = () => {
    mongoose_1.default.set("strictQuery", false);
    mongoose_1.default
        .connect("mongodb://127.0.0.1:27017/GetCards")
        .then(() => console.log("Connected to DB"))
        .catch(() => console.log("Database connection failed!"));
    app.listen(3000, () => console.log("Server is up..."));
};
initApp();
