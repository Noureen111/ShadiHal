import React from "react";
import { useRoutes } from "react-router-dom";
import ProductsPage from "./Components/productsPage";
import Home from "./Components/home";

function Rout(){
    
        let rout = useRoutes([
            { path: "/", element: <Home /> },
            { path: "/productsPage", element: <ProductsPage /> },
          ]);
          return rout;
}

export default Rout;

{/* <Routes> */}
{/* <Route exact path="/" element={<Choose />} /> */}