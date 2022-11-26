import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { routes } from "./routes";

const RoutesPage = () => {
    const [isAdmin, setIsAdmin] = useState(!!localStorage.getItem('token'))
    console.log(isAdmin)
    return (
        <BrowserRouter>
            <Routes>
            {routes.map(route => {
                if(route.admin && !isAdmin) {
                    return false
                }
                return <Route key={route.url} path={route.url} element={<route.component/>}/>
            })}

            <Route path="*" element={<div>Page not found</div>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesPage;