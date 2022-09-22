import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardReturn } from 'react-icons/md'


const Search = () => {

    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        navigate('/search/'+search)
    }

    return(
        <div className="px-10">
            <form onSubmit={submitHandler}>
            <label className="text-sm text-gray-400 font-medium capitalize flex items-center mb-1">To search press <span className="px-1 flex items-center justify-center"> [Enter <MdKeyboardReturn />] </span> after typing</label>
            <input 
                onChange={(e)=> {setSearch(e.target.value)} } 
                className="px-3 py-4 mb-4 border-black border-2 w-full font-bold focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" 
                placeholder="Search ..." 
                input={search} 
            />
            </form>
        </div>
    )
}

export default Search