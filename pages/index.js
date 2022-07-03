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
export default function Home() {
  const router = useRouter();
  const [Province,setProvince]=useState([]);
  const [RouteList,setRouteList]=useState([]);
  //setProvince(ProvinceData);
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(false);
  useEffect(()=>{
    axios.get('http://localhost:8000/api/user',{
      withCredentials: true,
    }).then(response => { 
      setAuth(true);
    }).catch((e)=>{
      console.log(e)
            console.log("Not login")
              setAuth(false);
    })
      // (async()=>{
      // })();
      axios.get('http://127.0.0.1:8000/api/province').then(response => { 
        setProvince(response.data) 
      }).catch((e)=>{
              return e
      })
      setLoading(true)
       axios.get('http://127.0.0.1:8000/api/route').then(response => { 
                setRouteList(response.data) 
              }).catch((e)=>{
                      return e
              }).finally(()=>{
                              setLoading(false)
              })
  },[]);
  
const logout = async () => {
  await fetch('http://127.0.0.1:8000/api/logout', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
  })
  setAuth(false);
  await router.push('/');
}

  return (
    <>
            <NavBar className="relative" activevalue={1} auth={auth} logout={logout}></NavBar>
            <div className="relative w-full h-full">
                  <Image 
                      src={"/img/bg1.jpg"}
                      layout="fill"
                      width={1920}
                      height={1000}
                      objectFit="cover"
                  />    
                      
                      <div className="w-full relative">
                        <h2 className="text-center font-semibold text-4xl pb-8 pt-14 text-white pb-96">Good service Safe Travelling</h2>
                        {/* <div className="h-96">

                        </div> */}
                        <div className="w-full flex flex-wrap justify-center">
                          <SearchBar></SearchBar>
                        </div>
                        <h2 className="text-center font-semibold text-4xl pb-8 pt-14 text-white pb-40y"> </h2>
                      </div>  
              </div>
              <div className="w-full px-0 md:px-32 pt-32 ">
                <div className="flex grid-col-2 justify-between w-full">
                        <div>
                           <div className="w-9 h-1 bg-cyan-900 mb-5"></div>
                            <h1 className="text-cyan-900 text-xl font-bold	">Pupolar Destination</h1>
                        </div>
                        <div>
                            <h1 className="text-cyan-900 text-base">See more</h1>
                        </div>
                </div>
               <div className="mt-10 flex flex-wrap w-full">
                    {loading ? (<div  className="flex justify-center w-full mb-10">
             <svg role="status" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        </div>) :
                    Province.map(province=>{
                      return(<Provincecard item={province}></Provincecard>)
                    })
                    }
               </div>
              </div>
              <div className="w-full px-0 md:px-32 pt-10 bg-slate-200">
                <div className="flex grid-col-2 justify-between w-full">
                        <div>
                           <div className="w-9 h-1 bg-cyan-900 mb-5"></div>
                            <h1 className="text-cyan-900 text-xl font-bold">Pupolar Routes</h1>
                        </div>
                        <div>
                            <h1 className="text-cyan-900 text-base">See more</h1>
                        </div>
                </div>
               <div className="mt-10 flex flex-col justify-center pb-32">
                    {loading ? (<div className="flex justify-center w-full mb-10" >
             <svg role="status" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        </div>) :
                      // display All Route 
                      RouteList.map((item)=>{
                        return (
                          <RouteCard item={item} auth={auth}></RouteCard>   
                        )
                      })
                    }
               </div>
              </div>
                    <Footer></Footer>
    </>
      
  );
}