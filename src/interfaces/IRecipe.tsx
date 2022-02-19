import { IIngredient } from './IIngredient';

export default interface IRecipe {
  id: string,
  name: string,
  servings: number,
  cookTime: string,
  instructions: string,
  ingredients: Array<IIngredient>
}
