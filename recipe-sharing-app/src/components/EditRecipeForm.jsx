// EdoitRecipeForm component
  import { useState } from 'react';
  import useRecipeStore from './recipeStore';

  const EditRecipeForm = () => {
    const editRecipe = useRecipeStore(state => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      addRecipe({ id: Date.now(), title, description });
      setTitle('');
      setDescription('');
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <br/>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <br/>
        <button type="submit">Edit Recipe</button>
      </form>
    );
  };

  export default EditRecipeForm;