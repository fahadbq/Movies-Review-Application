import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import Search from './Search'

const MovieList = (props) =>{
    const [ cloneData, setCloneData ] = useState ([])

    //redux state
    const moviesData = useSelector((state) => state.movies )

    //use Effect for the first render and deep copy to copy data to other state 
    useEffect(() =>{
        setCloneData([...moviesData])
    }, [moviesData])

    return (
        <div>
            <h2> My Big Movie List </h2> <br />

            < Search setCloneData={setCloneData} originalData={moviesData} />

            { cloneData.map((ele) =>{
                return  <MovieCard key={ele.id}
                    { ...ele}
                />
            }) }
            
        </div>
    )
}

export default MovieList