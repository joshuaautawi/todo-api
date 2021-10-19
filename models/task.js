'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.User,{
        foreignKey : "user_id"
      })
    }
  };
  Task.init({
    id : {
      type : DataTypes.UUID,
      defaultValue : DataTypes.UUIDV4,
      allowNull : false,
      primaryKey : true
    },
    title: DataTypes.STRING,
    detail: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    user_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};