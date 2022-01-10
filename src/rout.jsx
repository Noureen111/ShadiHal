import React from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import ProductsPage from "./Components/productsPage";
import Home from "./Components/home";

function Rout(){
    
        // <Routes>
        //     <Route exact path="/" element={<Home />} />
        //     <Route path="/venues" element={<ProductsPage />} />
        // </Routes>

        let rout = useRoutes([
            { path: "/", element: <Home /> },
            { path: "/productsPage", element: <ProductsPage /> },
            // ...
          ]);
          return rout;
    
}

export default Rout;

{/* <Routes> */}
{/* <Route exact path="/" element={<Choose />} /> */}