import express from "express" ;
import mongoose from "mongoose";
const app = express();

//Middlewares

const { cardRouter } = require("./routes/card.route")

app.use(express.json())
app.use("/findcard", cardRouter);

//Routes



//Init app / Connect to DB


const initApp = () => {
    mongoose.set("strictQuery", false);
    mongoose
    .connect("mongodb://127.0.0.1:27017/GetCards")
    .then(() => console.log("Connected to DB"))
    .catch(() => console.log("Database connection failed!"));
    app.listen(3000, () => console.log("Server is up..."));
};

initApp();


 