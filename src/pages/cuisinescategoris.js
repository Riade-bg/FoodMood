import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'


const CCat = () =>{
    const [ccat, setCcat] = useState([])

    const getCc = () => {
        
        const data = [
            "African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern ", "European", "European", "French",
            "German", "Greek","Indian","Irish","Italian","Japanese","Korean","Latin","American",
            "Mediterranean" ,"Mexican" ,"Middle" ,"Eastern" ,"Nordic" ,"Southern" ,"Spanish" ,"Thai" ,"Vietnamese"
        ].map((e)=>{
            return(
                e.toLowerCase()
            )
        })
        return(
            setCcat(data)
        )
    }

    useEffect(()=>{
        getCc()
    }, [])
    return(
        <div className='grid grid-cols-12 gap-4 m-10'>
            {ccat.map((cuisines)=>{
                    return(
                        <div className="bg-[#F6EDE7] text-black border-2 border-black drop-shadow-[6px_6px_0px_rgba(0,0,0,0.99)] 
			                mb-3 hover:drop-shadow-[9px_9px_0px_rgba(0,0,0,0.99)] transition ease-in-out col-span-12 lg:col-span-3 md:col-span-4">
                                <NavLink className={"lowercase"} to={'/cuisine/'+cuisines}>
                                    <h1 className='text-center uppercase font-bold font-yeseva text-3xl py-5'>{cuisines}</h1>
                                </NavLink>
                  
                        </div>
                    )
            })}
        </div>
    )
}

export default CCat