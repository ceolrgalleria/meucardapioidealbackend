
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Dummy meal plan data
const mealPlan = [
  { name: 'Grilled Chicken Salad', calories: 400 },
  { name: 'Quinoa Bowl with Veggies', calories: 350 },
  { name: 'Greek Yogurt with Berries', calories: 150 },
];

// Dummy forum posts
const forumPosts = [
  { id: 1, title: 'Best Low-Carb Recipes', content: 'Check out these great low-carb ideas...' },
  { id: 2, title: 'Tips for Meal Prep', content: 'Planning ahead can save time!' },
];

app.get('/meal-plan', (req, res) => {
  res.json(mealPlan);
});

app.get('/forum', (req, res) => {
  res.json(forumPosts);
});

app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
