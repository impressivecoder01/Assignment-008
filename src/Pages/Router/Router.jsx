import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import MainLayout from "../../Components/Layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: `/`,
        element: <MainLayout></MainLayout>
    }
])
export default router