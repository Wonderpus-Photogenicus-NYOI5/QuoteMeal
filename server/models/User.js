const mongoose = require("mongoose");
const { Schema } = mongoose;

const IngredientSchema = new Schema({
  'name': { type: String, required: true },
  'amount': { type: String }
})

const RecipeSchema = new Schema({
  'name': { type: String, required: true },
  'category': { type: String, required: true },
  'region': { type: String, required: true },
  'instructions': { type: String, required: true },
  'image': { type: String },
  'video': { type: String },
  'ingredients': [IngredientSchema]
})

const UserSchema = new Schema({
  'username': { type: String, required: true },
  'password': { type: String, required: true },
  'firstName': { type: String, required: true },
  'lastName': { type: String, required: true },
  'email': { type: String, required: true },
  'favRecipes': [RecipeSchema]
})

module.exports = mongoose.model('User', UserSchema);