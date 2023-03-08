const Task = require("../models/taskModel");

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({msg: err.message});
    }
}

const getAllTasks =  async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({msg: err.message});
    }
}

const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        if(!task) {
            return res.status(404).json(`No task associated with id ${id}`);
        }
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({msg: err.message});
    }
}


const deleteTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        if(!task) {
            return res.status(404).json(`No task associated with id ${id}`);
        }
        res.status(200).json("Task deleted");
    } catch (err) {
        res.status(500).json({msg: err.message});
    }
}

const editTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(
            {_id: id}, req.body, {new: true, runValidators: true}
        );
        if(!task) {
            return res.status(404).json(`No task associated with id ${id}`);
        }
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({msg: err.message});
    }
}

module.exports = {createTask, getAllTasks, getTaskById, deleteTaskById, editTaskById};