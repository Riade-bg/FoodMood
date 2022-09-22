import { NavLink } from 'react-router-dom'

const Header = () => {
    return(
        <>
        <header className='border-black border-b-2 h-[630px] mb-3 grid grid-cols-6 bg-[#F6EDE7] overflow-hidden'>

            <div className='col-span-6 lg:col-span-4 md:col-span-3
                h-full border-black border-r-2 px-10 flex flex-col justify-center items-center md:items-start'>

                <h1 className='text-center md:text-left text-5xl lg:text-7xl capitalize font-yeseva font-bold w-full lg:w-3/4'>Discover what makes a great meal.</h1>
                <p className='text-black text-center md:text-left text-base w-full lg:w-3/4 my-3 font-medium'>Browse hundreds of free recipes from all over the world that you can prepare within the comfort of your home.</p>
                <NavLink to={"/browse"}>
                    <button 
                    className='px-5 py-3 border-black border-2 bg-black text-[#F6EDE7] 
                    uppercase font-bold text-sm hover:bg-[#F6EDE7] hover:text-black transition-all'>Start Browsing</button>
                </NavLink>
            </div>
            <div className='hidden md:block col-span-6 lg:col-span-2 md:col-span-3 h-full overflow-hidden'>
                <img 
                    src="https://png.pngtree.com/background/20210710/original/pngtree-japanese-food-sushi-illustration-poster-background-picture-image_1061304.jpg" 
                    alt="Sushi Vector" className='min-w-full max-w-full min-h-full max-h-full object-cover'
                />
            </div>

        </header>
        </>
    )
}

export default Header