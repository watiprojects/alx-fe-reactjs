import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";

const App = () => {
  return (
    <div style={{ margin: '2.5rem'}}>
      <h1>Recipe App</h1>
    <EditRecipeForm />
    <DeleteRecipe />
    </div>
  );
}

export default App;