import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const SearchResults = () => {

    const [result, setResult] = useState([])
    let params = useParams();

    useEffect(()=>{
        getSearched(params.searchsyntax)
    },)

    const getSearched = async(name) => {

        const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=24&query=${name}`
        )
        const data = await response.json()
        setResult(data.results)
    }

    return (
        <div className="grid grid-cols-12 gap-4 p-10">
        {result.map((recipe) => {
            return(
                <div className="col-span-12 lg:col-span-3 md:col-span-4 bg-[#F6EDE7] text-black border-2 border-black drop-shadow-[6px_6px_0px_rgba(0,0,0,0.99)] 
                mb-3 hover:drop-shadow-[9px_9px_0px_rgba(0,0,0,0.99)] transition ease-in-out" key={recipe.id}>
                <img src={recipe.image} alt={recipe.title} className="w-full"/>
                <NavLink to={'/recipe/' + recipe.id}>
                <h1 className="hover:underline text-xl font-bold rounded-lg px-5 my-3 max-w-full max-h-full line-clamp-2 font-yeseva">
                {recipe.title}</h1>
                </NavLink>
            </div>
            )
        })}
        </div>
    )
}

export default SearchResults