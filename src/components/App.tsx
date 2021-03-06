import RecipeList from './RecipeList';
import '../css/app.css'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import IRecipe from '../interfaces/IRecipe';
import React from 'react';

interface RecipeContextInterface {
  handleRecipeAdd: () => void,
  handleRecipeDelete: (id: string) => void
}

const RecipeContext = React.createContext<RecipeContextInterface | null>(null)

const App = () => {
  const [recipes, setRecipes] = useState(sampleRecipes)

  const recipeContext = {
    handleRecipeAdd,
    handleRecipeDelete
  }

  return (
    <RecipeContext.Provider value={recipeContext}>
      <RecipeList
        recipes={recipes}
        handleRecipeAdd={handleRecipeAdd}
        handleRecipeDelete={handleRecipeDelete}
      />
    </RecipeContext.Provider>
  );

  function handleRecipeDelete(id: string) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id ))
  }

  function handleRecipeAdd() {
    const newRecipe: IRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 0,
      cookTime: '1:00',
      instructions: 'Inst.',
      ingredients: [
        {
          id: uuidv4(),
          name: 'Name',
          amount: '1 Tbs'
        }
      ]
    }

    setRecipes([...recipes, newRecipe])
  }
}


const sampleRecipes = [
  {
    id: uuidv4(),
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken',
    ingredients: [
      {
        id: '1',
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: '2',
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork',
    ingredients: [
      {
        id: '1',
        name: 'Pork',
        amount: '3 Pounds'
      },
      {
        id: '2',
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  },
]

export default App;
