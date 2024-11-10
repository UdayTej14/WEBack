// backend/models/recipe.js
const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
   title: String,
   description: String,
   instructions: [String],
   cookingTime: Number,
   prepTime: Number,
   servings: Number,
   imageURL: String,
   dateCreated: { type: Date, default: Date.now },
   ingredients: [{ name: String, quantity: Number, measurementUnit: String }],
   categories: [String],
   comments: [{ content: String, datePosted: Date }],
   ratings: [{ score: Number, dateRated: Date }],
});

module.exports = mongoose.model('Recipe', RecipeSchema);