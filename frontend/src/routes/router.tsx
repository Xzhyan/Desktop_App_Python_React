import { createBrowserRouter } from "react-router-dom";

// layouts
import MainLayout from "../layouts/MainLayout";

// Pages
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";



const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />
    },
]);

export default router;