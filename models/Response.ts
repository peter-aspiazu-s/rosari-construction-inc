import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db';

export const Response = sequelize.define('Response', {
    optionVisited: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
});