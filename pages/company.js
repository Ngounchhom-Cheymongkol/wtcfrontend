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
import CompanyCard from "../components/CompanyCard";
import Footer from "../components/footer";
export default function Company() {
  const router = useRouter();
  const [Province,setProvince]=useState([]);
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
      axios.get('http://localhost:8000/api/company',).then(response => { 
        setProvince(response.data) 
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
            <NavBar className="relative" auth={auth}  activevalue={3} logout={logout}></NavBar>
              <div className="w-full px-0 md:px-32 pt-10 bg-slate-200">
                <div className="w-full flex flex-wrap justify-center"><SearchBar></SearchBar></div>
                <div className="flex grid-col-2 justify-between w-full mt-10">
                        <div>
                           <div className="w-9 h-1 bg-cyan-900 mb-5"></div>
                            <h1 className="text-cyan-900 text-xl font-bold	">Company</h1>
                        </div>
                       
                </div>
               <div className="mt-10 flex flex-wrap justify-center mb-20">
                      {
                              // display All Route 
                              Province.map((item)=>{
                                return (
                                  <CompanyCard item={item}></CompanyCard>   
                                )
                              })
                            }
               </div>
               <Footer className="mt-10">

                            </Footer>
              </div>
                            
    </>
      
  );
}