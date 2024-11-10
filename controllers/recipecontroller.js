// backend/controllers/recipeController.js
const Recipe = require('../models/Recipe');

// Get all recipes in a specified category
exports.getRecipesByCategory = async (req, res) => {
   const category = req.params.category;

   try {
      const recipes = await Recipe.find({ categories: category });
      res.json(recipes);
   } catch (error) {
      res.status(500).json({ message: 'Error retrieving recipes', error });
   }
};

// Get a specific recipe by ID
exports.getRecipeById = async (req, res) => {
   try {
      const recipe = await Recipe.findById(req.params.id);
      if (!recipe) {
         return res.status(404).json({ message: 'Recipe not found' });
      }
      res.json(recipe);
   } catch (error) {
      res.status(500).json({ message: 'Error retrieving recipe', error });
   }
};
// Search for recipes by title (partial match)
exports.searchRecipes = async (req, res) => {
   const { query } = req.query;

   try {
      const recipes = await Recipe.find({ title: { $regex: query, $options: 'i' } });
      res.json(recipes);
   } catch (error) {
      res.status(500).json({ message: 'Error searching for recipes', error });
   }
};