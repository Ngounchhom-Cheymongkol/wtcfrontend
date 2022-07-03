import Image from "next/image";
import React from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import BgImg from "../public/img/bg1.jpg"
import {useEffect,useState} from 'react'
import axios, { Axios } from "axios";
import jsCookie from "js-cookie";
import {useRouter} from "next/router";
import Provincecard from "../components/ProvinceCard";
import RouteCard from "../components/RouteCard";
import Footer from "../components/footer";
export default function Route() {
  const router = useRouter();
  const [Province,setProvince]=useState();
  //setProvince(ProvinceData);
  const [RouteList,setRouteList]=useState([]);

  const [auth, setAuth] =  React.useState(false);
  useEffect(()=>{
      axios.get('http://localhost:8000/api/user',{
        withCredentials: true,

      }).then(response => { 
        setAuth(true)
        console.log(response.data.full_name)
      }).catch((e)=>{
              console.log("Not login")
                setAuth(false);
      })
      axios.get('http://localhost:8000/api/province',).then(response => { 
        setProvince(response.data) 
      }).catch((e)=>{
              return e
      }) 
      axios.get('http://localhost:8000/api/route').then(response => { 
                setRouteList(response.data) 
              }).catch((e)=>{
                      return e
              })
  },[]);
const logout = async () => {
  await fetch('http://localhost:8000/api/logout', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
  })
  setAuth(false);
  await router.push('/');
}
  return (
    <>
            <NavBar className="relative" auth={auth}  activevalue={2} logout={logout}></NavBar>
              <div className="w-full px-0 md:px-32 pt-10 bg-slate-200">
                <div className="w-full flex flex-wrap justify-center"><SearchBar></SearchBar></div>
                <div className="flex grid-col-2 justify-between w-full">
                        <div>
                           <div className="w-9 h-1 bg-cyan-900 mb-5"></div>
                            <h1 className="text-cyan-900 text-xl font-bold	">Routes</h1>
                        </div>
                        <div>
                            <h1 className="text-cyan-900 text-base">See more</h1>
                        </div>
                </div>
               <div className="mt-10 flex flex-col justify-center mb-20">
                      {
                              // display All Route 
                              RouteList.map((item)=>{
                                return (
                                  <RouteCard item={item}></RouteCard>   
                                )
                              })
                            }
               </div>
               <Footer className="mt-10"></Footer>
              </div>
              

    </>
      
  );
}