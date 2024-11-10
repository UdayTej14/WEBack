// backend/routes/recipeRoutes.js
const express = require('express');
const { getRecipesByCategory, getRecipeById, searchRecipes} = require('../controllers/recipeController');
const router = express.Router();

// Route to get a recipe by ID
router.get('/recipe/:id', getRecipeById);

// Route to get recipes by category
router.get('/:category', getRecipesByCategory);

// Route to search for recipes
router.get('/recipes/search', searchRecipes);

module.exports = router;