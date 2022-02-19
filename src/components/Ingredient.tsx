import { IIngredient } from '../interfaces/IIngredient';

export const Ingredient: React.FC<{ ingredient: IIngredient }> = ({ ingredient }) => {
  return (
    <div>
      <span>{ingredient.name}: {ingredient.amount}</span>
    </div>
  )
}
