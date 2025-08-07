import express from "express";

const app = express();

app.get("/", (req,res) => {
    res.send("Welcome  fg");
})

app.listen(8000, () => {
    console.log("Server Started on PORT 8000");
});
