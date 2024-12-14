// backend/routes/recipeRoutes.js
const express = require('express');
const { getRecipesByCategory, getRecipeById, searchRecipes, addRecipe} = require('../controllers/recipeController');
const router = express.Router();

// Route to search for recipes
router.get('/recipe/search', searchRecipes);

// Route to get a recipe by ID
router.get('/recipe/:id', getRecipeById); // recipe/

// Route to get recipes by category
router.get('/:category', getRecipesByCategory);

//Route to add recipes
router.post('/add', addRecipe);

module.exports = router;