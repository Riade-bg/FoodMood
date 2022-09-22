import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { NavLink } from "react-router-dom";
import {AiOutlineHourglass} from 'react-icons/ai'
import { motion } from 'framer-motion'

const Trending = () => {
	const [trending, setTrending] = useState([]);
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		getTrending();
	}, []);

	const getTrending = async () => {
		const check = localStorage.getItem("trending");

		setLoading(true)
		if (check) {
			setTrending(JSON.parse(check));
			setLoading(false)
		} else {
			const response = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
			);
			const data = await response.json();

			localStorage.setItem("trending", JSON.stringify(data.recipes));

			setTrending(data.recipes);
			setLoading(false)
		}
	};

	return (
		<div className="p-10 w-full">
			<h1 className="font-bold text-2xl font-yeseva underline">Trending Today:</h1>
			<span className="text-xs font-bold">swipe to view more</span>
			{loading ? (
				<div className="h-screen flex items-center justify-center bg-black text-white uppercase text-4xl">
						<AiOutlineHourglass />
					</div>  
				) : ( 
			<Splide
				options={{
					perPage: 4,
					breakpoints:{
						1024:{
							perPage:3,
						},
						750:{
							perPage:2,
						},
						640:{
							perPage:1,
						},
					},
					type:'loop',
					perMove: 1,
					focus: 'center',
					arrows:false,
					pagination:false,
					gap:"1rem"
				}}
			>
				{trending.map((recipe) => {
					return (
						<SplideSlide key={recipe.id} className="bg-[#F6EDE7] text-black border-2 border-black drop-shadow-[6px_6px_0px_rgba(0,0,0,0.99)] 
						mb-3 hover:drop-shadow-[9px_9px_0px_rgba(0,0,0,0.99)]">
							<img src={recipe.image} alt={recipe.title} />
								<NavLink to={'/recipe/'+recipe.id}>
								<h1 className="hover:underline text-lg font-bold rounded-lg px-5 py-3 max-w-full max-h-1/3 line-clamp-2 font-yeseva">
									{recipe.title}
								</h1>
								</NavLink>
								<p dangerouslySetInnerHTML={{__html: recipe.summary}} 
								className="text-sm font-medium max-h-full px-5 mb-3 line-clamp-3">
								</p>
						</SplideSlide>

					);
				})}
			</Splide>
			)}
		</div>
	);
};

export default Trending;
