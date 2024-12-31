import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";

import Home from "../Pages/home/Home";
import Login from "../Pages/login/Login";
import Register from "../Pages/register/Register";
import News from "../Pages/News/News";
import PrivateRout from "./PrivateRout";
import LeftsideNav from "../pages/shard/leftsidenav/LeftsideNav";
import Carrear from "../Pages/shard/header/Carrear";
import About from "../Pages/shard/header/About";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader: () =>fetch('http://localhost:3000/newses'),
            // () => fetch('http://localhost:3000/newsesCount')],
        },
        {
            path:'/news/:id',
            element:<PrivateRout><News></News></PrivateRout>,
           loader:({params}) => fetch(`http://localhost:3000/newses/${params.id}`)
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path:'/leftsidenave',
            element:<LeftsideNav></LeftsideNav>,
            loader:() => fetch('http://localhost:3000/newses')
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/career',
            element:<Carrear></Carrear>
        }
    ]
    },
    
  ]);
  export default router;