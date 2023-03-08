const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/connectDB");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.send("home page");
})

app.post("/api/tasks", async (req, res) => {
    console.log(req.body);
    res.send("task created");
})


const PORT = process.env.PORT || 5000

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`)
        });
    } catch (error) {
        console.log(error)
    }
}

startServer();