import { NavLink, useLocation } from "react-router-dom"


const Nav = () => {
    const params = useLocation()
    return(
        <nav className={`py-5 px-10 border-black border-b-2 text-black bg-[#F6EDE7] transition-all sticky top-0 z-50`}>
            <div className='w-full flex items-center justify-between'>
                <h1 className="uppercase font-bold text-2xl font-Dela">FOOD MOOD</h1>
                <ul className='flex'>
                {params.pathname !== "/" && (
                    <NavLink to={"/"}>
                        <li className='px-3 text-black font-bold text-base uppercase mr-4 hover:bg-black hover:text-[#F6EDE7] transition-all'>Home</li>
                    </NavLink>
                    )}
                    
                    <NavLink to={"/browse"}>
                        <li className='px-3 text-black font-bold text-base uppercase mr-4 hover:bg-black hover:text-[#F6EDE7] transition-all'>Browse</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Nav