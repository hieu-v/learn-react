import Recipe from './Recipe'
import IRecipe from '../interfaces/IRecipe'

interface IProps {
  recipes: Array<IRecipe>,
  handleRecipeAdd: () => void,
  handleRecipeDelete: (id: string) => void
}

const RecipeList: React.FC<IProps> = (props) => {
  const {
    recipes,
    handleRecipeAdd,
    handleRecipeDelete
  } = props
  return (
    <div className='recipe-list'>
      {recipes.map((recipe: IRecipe) => <Recipe key={recipe.id} recipe={recipe} handleRecipeDelete={handleRecipeDelete} />)}
      <div className='recipe-list__add-recipe-btn-container'>
        <button className='btn btn--primary' onClick={handleRecipeAdd}>Add recipe</button>
      </div>
    </div>
  )
}

export default RecipeList
