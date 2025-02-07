import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

const Note = sequelize.define("Note", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
})

export default Note

