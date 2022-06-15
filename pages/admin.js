import RouteCard from "../components/Dashboard/RouteCard"
import {useState} from 'react'
import NavBar from "../components/Dashboard/NavBar";
import Image from 'next/image'
import AddRoute from "../components/Dashboard/AddRoute";
import SideBar from "../components/Dashboard/sidebar";
const Admin=()=>{
    return(
        <>
        <NavBar></NavBar>
        <div className="w-full flex bg-slate-200">
             <SideBar></SideBar>
            
            <div className="grow mt-16 ml-32 p-10">
                <div className="flex grid-col-2 justify-between w-full">
                        <div>
                           <div className="w-9 h-1 bg-cyan-900 mb-5"></div>
                            <h1 className="text-cyan-900 text-xl font-bold	">Routes</h1>
                        </div>
                        <div>
                            {/* <button className="w-10 h-10 p-2 bg-cyan-900 rounded-xl focus:ring-4 focus:ring-blue-300 mx-2"><Image width="100%" height="100%" layout="responsive" src={"/img/add1.png"}></Image></button> */}
                            <AddRoute></AddRoute>
                            <button className="w-10 h-10 p-2 bg-cyan-900 rounded-xl focus:ring-4 focus:ring-blue-300 mx-2"><Image width="100%" height="100%" layout="responsive" src={"/img/delete2.png"}></Image></button>
                        </div>
                </div>
                <div className="grow flex flex-wrap h-fit justify-start  overscroll-contain">
                <RouteCard ></RouteCard>
                <RouteCard></RouteCard>
                <RouteCard></RouteCard>
                <RouteCard></RouteCard>
                <RouteCard></RouteCard>
                <RouteCard></RouteCard>
                <RouteCard></RouteCard>
                <RouteCard></RouteCard>
                <RouteCard></RouteCard>
                <RouteCard></RouteCard>
                <RouteCard></RouteCard>
                <RouteCard></RouteCard>
                <RouteCard></RouteCard>
                <RouteCard></RouteCard>
                </div>
            </div>
        </div>
        </>
        
        
    )
}
export default Admin;