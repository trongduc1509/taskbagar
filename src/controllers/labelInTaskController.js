const services = require("../services/labelInTaskService");

const getAllTaskLabels = async (req, res) => {
    const {
        task_id
    } = req.query;

    try {
        const taskLabels = await services.getLabelsByTaskId({task_id});
        if (taskLabels) {
            res.status(200);
            res.send(taskLabels);
        }
    } catch(err) {
        res.status(500);
        console.log(err);
        res.send(err);
    }
}

module.exports = {
    getAllTaskLabels,
}