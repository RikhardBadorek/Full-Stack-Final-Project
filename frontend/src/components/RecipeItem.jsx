import { useDispatch } from 'react-redux'
import { deleteRecipe } from '../features/recipes/recipeSlice'

function RecipeItem({recipe}) {
    const dispatch = useDispatch()

  return (
    <div className="recipe">
        <div>
            {new Date(recipe.createdAt).toLocaleString('en-US')}
        </div>
        <h2>{recipe.text}</h2>
        <button onClick={() => dispatch(deleteRecipe(recipe._id))} className="close">X</button>
    </div>
  )
}

export default RecipeItem
