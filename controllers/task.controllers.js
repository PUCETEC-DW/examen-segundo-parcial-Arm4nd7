import TaskModel from '../models/task.model.js'

export const postOneTask = (req,res) => {
    const data = req.body
    const task = req.TaskModel.postOne(data)
    return res.status(200).json(task)
}

export const delteOneTask = (req, res) => {
    const id = req.params
    const task = req.TaskModel.deleteOne(id)
    return res.status(404).json(task)
}



