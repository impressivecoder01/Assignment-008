import { createBrowserRouter } from "react-router";
import MainLayout from "../../Components/Layouts/MainLayout";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import AllApplications from "../AllApplications/AllApplications";

const router = createBrowserRouter([
    {
        path: `/`,
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: `/`,
                element: <Home></Home> ,
                loader: () => fetch(`/data.json`)
            },
            {
                path: `/applications`,
                element: <AllApplications></AllApplications>
            },

        ]
    },
    
])
export default router