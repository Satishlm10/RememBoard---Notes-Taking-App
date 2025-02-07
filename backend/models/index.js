import User from "./User.js"
import Note from "./Note.js"
import Category from "./Category.js"

User.hasMany(Note)
Note.belongsTo(User)

Note.belongsToMany(Category, { through: "NoteCategories" })
Category.belongsToMany(Note, { through: "NoteCategories" })

export { User, Note, Category }

