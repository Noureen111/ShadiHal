import React from "react";
import { useRoutes } from "react-router-dom";
import ProductsPage from "./Components/productsPage";
import Home from "./Components/home";
import VenueDetail from "./Components/venueDetail";
import CatererDetail from "./Components/catererDetail";
import CatererPage from "./Components/catererPage";

function Rout(){
    
        let rout = useRoutes([
            { path: "/", element: <Home /> },
            { path: "/productsPage", element: <ProductsPage /> },
            { path: "/venueDetail", element: <VenueDetail /> },
            { path: "/catererDetail", element: <CatererDetail /> },
            { path: "/catererPage", element: <CatererPage /> },
          ]);
          return rout;
}

export default Rout;
