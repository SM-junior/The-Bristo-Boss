import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import SignUp from "../pages/Signup/SignUp";
import PrivateRouter from "./PrivateRouter";
import Dashboard from '../layout/Dashboard';
import MyCart from "../pages/Dashborad/MyCart/MyCart";
import AllUsers from "../pages/Dashborad/AllUsers/AllUsers";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/shop/:category',
          element:<PrivateRouter><Shop></Shop></PrivateRouter>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        
      ]

    },
    {
      path:'dashboard',
      element:<PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
      children:[
        {
          path:'mycart',
          element:<MyCart></MyCart>
        },
        {
          path:'allusers',
          element:<AllUsers></AllUsers>
        }
      ]
    }
  ]);

  export default router