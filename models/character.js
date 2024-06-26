const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');
class Character extends Model {
}

Character.init(
    {
     id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    char_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    charclass_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'charclass',
            key: 'id',
        }
    },
    race_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'race',
            key: 'id',
        }
    },
    maxHP: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    currentHP: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT('long'),
        allowNull: true,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    features:{
        type: DataTypes.TEXT('long'),
        allowNull: true,
    }

    
    },
    {
    sequelize,
    freezeTableName: true,
    modelName: 'character',
    }
)

module.exports = Character;
