
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import Footer from "../pages/Footer";
import Root from "../layout/Root";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyList from "../pages/MyList";
import PrivateRoute from "../component/PrivateRoute";
import ViewDetails from "../pages/ViewDetails";
import SpotsSpecificCountry from "../pages/SpotsSpecificCountry";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                  loader: () => fetch('https://tourism-management-server-delta.vercel.app/addSpots'),
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/allTouristsSpot',
                element: <AllTouristsSpot></AllTouristsSpot>,
                loader: () => fetch('https://tourism-management-server-delta.vercel.app/addSpots'),
            },
            {
                path: '/addTouristsSpot',
                element: <PrivateRoute>
                    <AddTouristsSpot></AddTouristsSpot>
                </PrivateRoute>,
            },
            {
                path: '/home/:spotName',
                element: <PrivateRoute>
                    <ViewDetails></ViewDetails>,
                </PrivateRoute>,
                loader: () => fetch('https://tourism-management-server-delta.vercel.app/addSpots'),
            },
            {
                path: '/SpotsSpecificCountry/:spotName',
                element: <SpotsSpecificCountry></SpotsSpecificCountry>,
                loader: () => fetch('https://tourism-management-server-delta.vercel.app/addSpots'),
            },
            {
                path: '/myList',
                element: <PrivateRoute>
                    <MyList></MyList>
                </PrivateRoute>,
                loader: () => fetch('https://tourism-management-server-delta.vercel.app/addSpots'),
            },
            {
                path: '/footer',
                element: <Footer></Footer>
            },
            {
                path: "*",
                element: <NotFoundPage></NotFoundPage> // Catch-all route for 404 Not Found
            },
        ]
    },
]);