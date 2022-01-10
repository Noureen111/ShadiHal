import React from "react";
import { useRoutes } from "react-router-dom";
import ProductsPage from "./Components/productsPage";
import Home from "./Components/home";
import VenueDetail from "./Components/venueDetail";

function Rout(){
    
        let rout = useRoutes([
            { path: "/", element: <Home /> },
            { path: "/productsPage", element: <ProductsPage /> },
            { path: "/venueDetail", element: <VenueDetail /> },
            // { path: "/registration", element: <RegistrationForm /> },
          ]);
          return rout;
}

export default Rout;

{/* <Routes> */}
{/* <Route exact path="/" element={<Choose />} /> */}