import { useEffect, useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import Categories from "./Categories";


const LeftsideNav = () => {
    const categories = useLoaderData();
    console.log(categories);
    // const [categories,setcategories]=useState([])
    // useEffect(() => {
    //  fetch('categories.json')
    //  .then(res => res.json())
    //  .then(data => setcategories(data))
    // }
    //     ,[])

    return (
        <div className="space-y-6">
            <NavLink to= {'/leftsidenave'}className=" block text-2xl">All Categories</NavLink>
            <NavLink to= {'/leftsidenave'}className="block text-2xl">International</NavLink>
            <NavLink to= {'/leftsidenave'}className="block text-2xl">Busness</NavLink>
            
        
        {
             categories.map(category => <Categories
             key ={category._id}
             category ={category}
             ></Categories> )
        }


           
        </div>
    );
};

export default LeftsideNav;