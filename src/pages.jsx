import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.js";
import Cuisine from "./pages/cuisine.js";
import SearchResults from "./pages/searchresults.js";
import Recipe from "./pages/recipe.js";
import CCat from "./pages/cuisinescategoris.js";

const Pages = () => {
    return (        
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/search/:searchsyntax" element={<SearchResults />} />
            <Route path="/browse/" element={<CCat />} />
            <Route path="/recipe/:recipedetails" element={<Recipe />} />
        </Routes>
    )
};

export default Pages;
