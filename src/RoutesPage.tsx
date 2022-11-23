import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routes } from "./routes";

const RoutesPage = () => {
    return (
        <BrowserRouter>
            <Routes>
            {routes.map(route => (
                <Route key={route.url} path={route.url} element={<route.component/>}/>
            ))}
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesPage;