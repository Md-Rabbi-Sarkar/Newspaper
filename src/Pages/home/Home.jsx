import { useLoaderData } from "react-router-dom";
import Navbar from "../shard/Navbar/Navbar";
import Header from "../shard/header/Header";
import LeftsideNav from "../shard/leftsidenav/LeftsideNav";
import RightsideNav from "../shard/rightsidenav/RightsideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";
import {  useEffect, useState } from "react";
import'./Pagination.css'


const Home = () => {
    const Mnews = useLoaderData();
    const [counts ,setCount] = useState([]);
    const [itemPerPage, setItemPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState();
    const {count} =counts;
    // console.log(count);
    // const intemPerPage = 10;
    const numberOfPage = Math.ceil(count/itemPerPage);
     
    const pages = [];
    for (let i = 1; i <= numberOfPage ; i++){
        pages.push(i);
    }
    // console.log(pages);

    // console.log(Mnews);
    useEffect(() => {
        fetch('http://localhost:3000/newsesCount')
        .then (res => res.json())
        .then (data => setCount(data));
    },[])

    const handleItemPerPage= e =>{
        const val = parseInt(e.target.value) ;
        console.log(val)
        setItemPerPage(val);
        setCurrentPage(1);
    }
    const handlePrePage = () =>{
        if(currentPage>1){
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNexPage = () => {
        if(currentPage < pages.length ){
            setCurrentPage(currentPage + 1)
        }
    }

    return (

        <div >
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-6">
                <div >
                    <LeftsideNav></LeftsideNav>
                </div>
                <div className="md:col-span-2">

                    {
                        Mnews?.map(news =><NewsCard
                        key={news._id}
                        news={news}
                        ></NewsCard>)
                    }
               
        
                </div>
                <div>
                    <RightsideNav></RightsideNav>
                </div>
            </div>
            <div className="text-center pagination">
                <button onClick={handlePrePage}>Prev</button>
                {
                    pages.map(page => <button className ={currentPage===page ? 'selected' : undefined} onClick={() =>{setCurrentPage(page)}} key={page}>{page}</button>)
                }
                <button onClick={handleNexPage}>Next</button>
                <select className="bg-slate-600" onChange={handleItemPerPage} value={itemPerPage} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>
        </div>
    );
};

export default Home;