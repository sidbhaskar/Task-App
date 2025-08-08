import express from "express";
import authRouter from "./routes/auth.js";
// import authRouter from "./routes/auth";

const app = express();

app.use(express.json());
app.use("/auth",authRouter);
app.get("/", (req,res) => {
    res.send("Welcome  Hiiii");
})

app.listen(8000, () => {
    console.log("Server Started on PORT 8000");
});
