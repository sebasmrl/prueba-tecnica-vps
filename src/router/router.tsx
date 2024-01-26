import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../pages";
import { ErrorPage } from "../shared/ErrorPage";

export const router = createBrowserRouter([
    { path: '', 
        element: <HomePage />,
        errorElement: <ErrorPage />
    },
    { path: 'prueba-tecnica-vps',
    element: <HomePage />,
    errorElement: <ErrorPage />}
]);