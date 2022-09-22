import { BrowserRouter } from "react-router-dom";
import Pages from "./pages.jsx";
import "./App.css"
import Nav from "./components/nav.js";
import { useEffect } from "react";



const App = () => {
  useEffect(()=>{
    
  }, [])
  return (
      <BrowserRouter>
        <Nav />
        <Pages />
      </BrowserRouter>
  );
};

export default App;
