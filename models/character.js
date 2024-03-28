const { Model, DataTypes } = require('sequelize');

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
    level: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    class_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'class',
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
    
    },
    {
    sequelize,
    freezeTableName: true,
    modelName: 'class',
    }
)

module.exports = Character;
