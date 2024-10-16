import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createRecipe } from '../features/recipes/recipeSlice'


function RecipeForm() {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(createRecipe({text}))
        setText('')
    }
  return (
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Recipe</label>
                <input type="text" name='text' id='text' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-group">
                <button className="btn btn-block" type='submit'>
                    Add Recipe
                </button>
            </div>
        </form>
    </section>
  )
}

export default RecipeForm
