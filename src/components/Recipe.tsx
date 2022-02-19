import { IngredientList } from './IngredientList'
import IRecipe from '../interfaces/IRecipe'

interface IProps {
  recipe: IRecipe,
  handleRecipeDelete: (id: string) => void
}

const Recipe: React.FC<IProps> = (props) => {
  const {
    recipe,
    handleRecipeDelete
  } = props

  return (
    <div className='recipe'>
      <div className='recipe__header'>
        <h3 className='recipe__title'>{recipe.name}</h3>
        <div>
          <button className='btn btn--primary mr-1'>Edit</button>
          <button
            className='btn btn--danger'
            onClick={() => { handleRecipeDelete(recipe.id) }}
          >Delete</button>
        </div>
      </div>

      <div className='recipe__row'>
        <span className='recipe__label'>Cook time:</span>
        <span className='recipe__value'>{recipe.cookTime}</span>
      </div>

      <div className='recipe__row'>
        <span className='recipe__label'>Servings:</span>
        <span className='recipe__value'>{recipe.servings}</span>
      </div>

      <div className='recipe__row'>
        <span className='recipe__label'>Instructions:</span>
        <div className='recipe__value recipe__instruction recipe__value--indented'>{recipe.instructions}</div>
      </div>

      <div className='recipe__row'>
        <span className='recipe__label'>Ingredients:</span>
        <div className='recipe__value recipe__value--indented'>
          <IngredientList ingredients={recipe.ingredients} />
        </div>
      </div>
    </div>
  )
}

export default Recipe
