
import Header from "../shard/header/Header";
import RightsideNav from "../shard/rightsidenav/RightsideNav";
import Navbar from "../shard/Navbar/Navbar";
import { useLoaderData, useParams } from "react-router-dom";



const News = () => {
    const {id} = useParams();
    
    const news=useLoaderData();
   
    console.log(news);


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">News Details</h2>
                    <p>{id}</p>
                  
                   
                </div>
                <div>
                    <RightsideNav></RightsideNav>
                </div>
            </div>
        </div>
    );
};

export default News;