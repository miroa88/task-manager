const Task = require("../model/taskModel");

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({msg: err.message})
    }
}

const getAllTasks =  async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({msg: err.message})
    }
}

module.exports = {createTask, getAllTasks};