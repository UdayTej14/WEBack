

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
   const {query} = req.query;

   try {
      const recipes = await Recipe.find().where('title').regex(new RegExp(query, 'i'));
      res.json(recipes);
   } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error searching for recipes', error });
   }
};

exports.addRecipe = async (req, res) => {
   const {
      title,
      description,
      ingredients,
      instructions,
      cookingTime,
      prepTime,
      servings,
      imageURL,
      categories,
   } = req.body;

   try {
      const newRecipe = new Recipe({
         title,
         description,
         ingredients,
         instructions,
         cookingTime,
         prepTime,
         servings,
         imageURL,
         categories,
      });

      const savedRecipe = await newRecipe.save();
      res.status(201).json({ message: 'Recipe added successfully', recipe: savedRecipe });
   } catch (error) {
      console.error('Error adding recipe:', error);
      res.status(500).json({ message: 'Error adding recipe', error });
   }
};