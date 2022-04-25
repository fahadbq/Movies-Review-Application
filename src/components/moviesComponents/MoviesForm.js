import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFormData } from '../../reduxFiles/actions/moviesAction'

const MoviesForm = (props) =>{

    const dispatch = useDispatch()

    const [ movieName, setMovieName ] = useState('')
    const [ ranking, setRanking ] = useState ('')

    const handleChage =(e) =>{
        const readInput = e.target.name
            if( readInput === 'movieName' ) {
                setMovieName(e.target.value)
            } else if ( readInput === 'ranking' ) {
                setRanking(e.target.value)
            }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        const formData = {
            id: Number(new Date()),
            movie : movieName,
            ranking: Number(ranking)
        }

        dispatch(addFormData(formData))

        setMovieName('')
        setRanking('')
    }

    return (
        <div className="shadow p-3 mb-5 bg-body rounded" style={{position: "fixed", right: "150px", top: "100px", width: "300px" }} >
            <h2> Add Movie </h2>

            <form onSubmit={handleSubmit} >

                <input type='text' 
                    placeholder='Enter movie name' 
                    value={movieName} 
                    onChange={handleChage} 
                    name='movieName'
                    className='form-control'
                /> <br />

                <input type='text'
                    placeholder='IMDb Ranking'
                    value={ranking}
                    onChange={handleChage}
                    name='ranking'
                    className='form-control'
                /> <br />

                <input type='submit' value='Add' className='btn btn-primary' />

            </form>
        </div>
    )
}

export default MoviesForm