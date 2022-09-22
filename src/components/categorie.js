import React from "react";
import {NavLink} from "react-router-dom";


const Cat = () => {
    return(
        <div className="max-w-full px-10 flex flex-wrap">
            <NavLink to={"/cuisine/italian"}>
                <button className="border-black border-2 px-5 py-3 my-2 mr-3 font-bold uppercase text-black bg-[#F6EDE7] text-sm">Italian Cuisine</button>
            </NavLink>

            <NavLink to={"/cuisine/american"}>
                <button className="border-black border-2 px-5 py-3 my-2 mr-3 uppercase font-bold text-black bg-[#F6EDE7] text-sm">American Cuisine</button>
            </NavLink>

            <NavLink to={"/cuisine/asian"}>
                <button className="border-black border-2 px-5 py-3 my-2 mr-3 uppercase font-bold text-black bg-[#F6EDE7] text-sm">Asian Cuisine</button>
            </NavLink>

            <NavLink to={"/cuisine/mediterranean"}>
                <button className="border-black border-2 px-5 py-3 my-2 mr-3 uppercase font-bold text-black bg-[#F6EDE7] text-sm">Mediterranean Cuisine</button>
            </NavLink>

            <NavLink to={"/cuisine/african"}>
                <button className="border-black border-2 px-5 py-3 my-2 mr-3 uppercase font-bold text-black bg-[#F6EDE7] text-sm">African Cuisine</button>
            </NavLink>

            <NavLink to={"/browse/"}>
                <button className="border-black border-2 px-5 py-3 my-2 mr-3 uppercase font-bold text-black bg-[#F6EDE7] text-sm">More Cuisines</button>
            </NavLink>

        </div>
    )
}

export default Cat