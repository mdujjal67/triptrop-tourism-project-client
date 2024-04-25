
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import Footer from "../pages/Footer";
import Root from "../layout/Root";
import Register from "../pages/Register";
import Login from "../pages/Login";
import UserProfile from "../pages/UserProfile";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyList from "../pages/MyList";
import PrivateRoute from "../component/PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
        //   loader: () => fetch('/Estate.json'),
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
            path: '/userProfile',
            element: <UserProfile></UserProfile>
        },
        {
            path: '/allTouristsSpot',
            element: <AllTouristsSpot></AllTouristsSpot>,
        },
        {
            path: '/addTouristsSpot',
            element: <PrivateRoute>
                <AddTouristsSpot></AddTouristsSpot>
            </PrivateRoute> ,
        },
        {
            path: '/myList',
            element: <PrivateRoute>
                <MyList></MyList>
            </PrivateRoute> ,
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