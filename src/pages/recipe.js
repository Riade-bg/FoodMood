import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Recipe = () => {

    let params = useParams()
    const [details, setDetails] = useState({})
    const [Ing, setIng] = useState({})
    const nav = useNavigate()

    const getRecipe = async() => {

        const response = await fetch(
            `https://api.spoonacular.com/recipes/${params.recipedetails}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        )
        const data = await response.json()

        setDetails(data)
        setIng(data.extendedIngredients)

        
    }

    useEffect(()=>{
        getRecipe()
    },[])


    return(
        <div className="m-10">
            <img src={details.image} alt = {details.title} className="w-full"/>
            <h1 className="text-5xl font-bold text-black font-yeseva px-5 py-10">{details.title}</h1>
            <p dangerouslySetInnerHTML={{__html: details.summary}} className="font-base font-thin line-relaxed px-5"></p>
            <h1 className="text-2xl p-5 font-bold">Instructions:</h1>
                <div className="px-5 ">
                    <p dangerouslySetInnerHTML={{__html: details.instructions}} className="font-base line-relaxed ">
                    </p>
                </div>
            <ul className="bg-[#F6EDE7] border-black border-2 drop-shadow-[6px_6px_0px_rgba(0,0,0,0.99)] p-3 mx-5 font-thin">
            <h4 className="text-xl font-bold">Ingredients:</h4>
                {Array.from(Ing).map((ingridient)=>{
                    return(
                        <li key={ingridient.id} className="font-medium text-lg">{ingridient.original}.</li>
                    )
                })}
            </ul>
            <button className="border-black border-2 px-5 py-3 mt-3 font-bold uppercase text-black bg-[#F6EDE7] text-sm mt-6" onClick={()=>(nav(-1))}>Go Back</button>
        </div>
    )
}

export default Recipe