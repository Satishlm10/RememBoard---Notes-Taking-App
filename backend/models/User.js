import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"
import bcrypt from "bcrypt"

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10)
  console.log("🔐 Hashing Password:", user.password)
  const hashedPassword = await bcrypt.hash(user.password, salt)
  
  console.log("🔐 Hashed Password:", hashedPassword)
  
})

User.prototype.comparePassword = async function (candidatePassword) {
  const match = await bcrypt.compare(candidatePassword, this.password);
  console.log(`Password Match: ${match}`);
  return match;
}

export default User

