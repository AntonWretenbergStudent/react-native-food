import mongoose, { mongo } from "mongoose"

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  caption: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  },
  rating: {
    type: Number,
    require: true,
    min: 1,
    max: 5,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true
  }

}, 
  {timestamps: true }
)

const Recipe = mongoose.model("Recipe", recipeSchema)

export default Recipe