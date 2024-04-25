
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import Footer from "../pages/Footer";
import Root from "../layout/Root";
import Register from "../pages/Register";
import Login from "../pages/Login";

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
          path: 'footer',
          element: <Footer></Footer>
      },
      {
        path: "*",
        element: <NotFoundPage></NotFoundPage> // Catch-all route for 404 Not Found
      },
      ]
    },
  ]);