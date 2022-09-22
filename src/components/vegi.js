import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { NavLink } from "react-router-dom";

const Vegi = () => {
	const [veggie, setVeggie] = useState([]);

	useEffect(() => {
		getTrending();
	}, []);

	const getTrending = async () => {
		const check = localStorage.getItem("veggie");

		if (check) {
			setVeggie(JSON.parse(check));
		} else {
			const response = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
			);
			const data = await response.json();

			localStorage.setItem("veggie", JSON.stringify(data.recipes));

			setVeggie(data.recipes);
		}
	};

	return (
		<div className="p-10 w-full">
			<h1 className="font-bold text-2xl font-yeseva underline">Our Vegetarian picks:</h1>
			<span className="text-xs font-bold">swipe to view more</span>

			<Splide
				options={{
					perPage: 3,
					breakpoints:{
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
					arrows: false,
					pagination: false,
					drag: "free",
					gap: "1rem",
				}}
			>
				{veggie.map((recipe) => {
					return (
						<SplideSlide key={recipe.id} className="bg-[#F6EDE7] text-black border-2 border-black drop-shadow-[6px_6px_0px_rgba(0,0,0,0.99)] 
						mb-3 hover:drop-shadow-[9px_9px_0px_rgba(0,0,0,0.99)]">
							
								<img src={recipe.image} alt={recipe.title} />
								<NavLink to={'/recipe/' + recipe.id}>
								<h1 className="hover:underline text-lg font-bold rounded-lg px-5 py-3 max-w-full max-h-1/3 line-clamp-2 font-yeseva">
									{recipe.title}
								</h1>
								</NavLink>
								<p dangerouslySetInnerHTML={{__html: recipe.summary}} 
								className="text-sm font-medium max-h-full px-5 line-clamp-3"></p>
							
						</SplideSlide>
					);
				})}
			</Splide>
		</div>
	);
};

export default Vegi;
