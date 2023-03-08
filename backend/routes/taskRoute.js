const express = require("express");
const { 
    createTask, 
    getAllTasks, 
    getTaskById, 
    deleteTaskById,
    editTaskById
} = require("../controllers/taskController");
const router = express.Router();

//create a task
router.post("/api/tasks", createTask);

//get all tasks
router.get("/api/tasks", getAllTasks);

//get a task by id
router.get("/api/tasks/:id", getTaskById);

//delete a task by id
router.delete("/api/tasks/:id", deleteTaskById)

//update a task by id
router.put("/api/tasks/:id", editTaskById)

//partial update a task by id
router.patch("/api/tasks/:id", editTaskById)

module.exports = router;