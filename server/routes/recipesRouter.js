const express = require('express');
const router = express.Router();

const recipesController = require('../controllers/recipesController');

router.get('/', recipesController.getRecipes);

// body ma byc: userId , name, type, difficulty, ingredients, time, description, photoUrl
router.post('/create', recipesController.createRecipe);

router.post('/remove', recipesController.deleteRecipe);

// body ma byc: userId, recipeId, text
router.post('/comment/add', recipesController.addComment);

// body ma byc :  commentId, userId
router.post('/comment/remove', recipesController.removeComment);

module.exports = router;
