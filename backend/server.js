const express = require("express");

const connectDB = require("./config/connectDB");
const taskRoutes = require("./routes/taskRoute");
const app = express();

//middleware
app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use(taskRoutes);

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