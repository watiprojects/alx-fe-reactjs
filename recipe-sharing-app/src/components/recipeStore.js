import { create } from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  //spread operator unpacks all items in an array hence writing square brackets here but not for deleteRecipe and updateRecipe as state.recipes.filter and state.recipes.map already returns an array.
  addRecipe: (newRecipe) => set(state => ({recipes: [...state.recipes, newRecipe] })),
  
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),
  //go through all recipes, if the current recipe id matches the updatedRecipe id, return the updated recipe. If not, return the original recipe unchanged.
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe ) 
  })),
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;