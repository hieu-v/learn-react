import { Ingredient } from './Ingredient'
import { IIngredient } from '../interfaces/IIngredient'

export const IngredientList: React.FC<{ ingredients: Array<IIngredient> }> = ({ ingredients }) => {
  return (
    <div className='ingredient-grid'>
      {ingredients.map((ingredient => <Ingredient ingredient={ingredient} />))}
    </div>
  )
}
