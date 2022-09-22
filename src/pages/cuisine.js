import "../App.css";
import React, { useEffect, useState } from "react";
import {NavLink, useParams} from 'react-router-dom'
import Cat from '../components/categorie.js'

const Cuisine = () => {

    const [cuisine, setCuisine] = useState([])
    let params = useParams()

    useEffect(()=>{
        
        getCuisine(params.type)
        
    }, [params.type])



    const getCuisine = async(name) => {

        try{
            const response = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&&cuisine=${name}`
            )
            const data = await response.json()
            setCuisine(data.results)
        }catch(error){
            console.error(error)
        }
    }

    return(
        <>
        <Cat />
        <div className="grid grid-cols-12 gap-4 px-10">
            {cuisine.map((recipes) => {
                return(
                <div className="col-span-12 lg:col-span-3 md:col-span-6 bg-[#F6EDE7] text-black border-2 border-black drop-shadow-[6px_6px_0px_rgba(0,0,0,0.99)] 
                mb-3 hover:drop-shadow-[9px_9px_0px_rgba(0,0,0,0.99)] transition ease-in-out" key={recipes.id}>
                    <img src={recipes.image} alt={recipes.title} className="w-full" />
                    <NavLink to={'/recipe/' + recipes.id}>
                    <h1 className="hover:underline text-xl font-bold rounded-lg px-5 my-3 max-w-full max-h-full line-clamp-2 font-yeseva">
                        {recipes.title}
                    </h1>
                    </NavLink>
                </div>
                )
            })}
        </div>
    </>
    )
}

export default Cuisine