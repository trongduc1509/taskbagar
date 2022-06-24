const sequelize = require('sequelize');
const { op } = require('sequelize');
const { models } = require('../models');

const getLabelsByTaskId = ({task_id}) => {
    return models.LabelsInTask.findAll({
        where: {
            task_id
        },
        include: { 
            model: models.Label,
            as: "label",
        },
    });
}


module.exports = {
    getLabelsByTaskId
}