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
const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 leading-normal " +
                  (openTab === 1
                    ? "text-black border-b-2 border-b-cyan-900"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Profile
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 leading-normal " +
                  (openTab === 2
                    ? "text-black border-b-2 border-b-cyan-900"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Settings
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 leading-normal " +
                  (openTab === 3
                    ? "text-black border-b-2 border-b-cyan-900"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Options
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Home() {
  const router = useRouter();
  const [auth, setAuth] =  React.useState(false);
  useEffect(()=>{
      axios.get('http://localhost:8000/api/user',{
        withCredentials: true,

      }).then(response => { 
        setAuth(true)
        console.log(response.data.full_name)
                 
                  //console.log('response.status: ', response.status);
                  //console.log(response.data);
      }).catch((e)=>{
              console.log("Not login")
                setAuth(false);
      })
                
  });
//   useEffect(() => {
//     (
                
//         // async () => {

//         //     //console.log("hello")
//         //     try {
//         //       const response = await fetch('http://localhost:8000/api/user', {
//         //                 credentials: 'include',
//         //             });

//         //             const content =response.json();
//         //             console.log("success")
//         //       console.log(content.data);
//         //     }
//         //     catch (error) {
//         //       console.log("false")
//         //       console.log(error);
//         //     }
//         //     // try {
//         //     //     const response = await axios.get('http://localhost:8000/api/user', {
//         //     //       // method:'GET',
//         //     //          withCredentials:true,
//         //     //         credentials: 'include',
//         //     //         //credentials: 'same-origin',
//         //     //         headers: {
//         //     //           'X-Requested-With': 'XMLHttpRequest',
//         //     //           'Accept':  'application/json',
//         //     //           'Content-Type': 'application/json',
//         //     //           //'Cache': 'no-cache',
//         //     //            // This is set on request
//         //     //           Cookie: `jwt=${jsCookie.get('jwt')}`
//         //     //       },
                   
//         //     //     });

//         //     //     const content = await response.json();
                
//         //     //     console.log(`Hi ${content.name}`);
//         //     //     // setAuth(true);
//         //     // } catch (e) {
//         //     //   console.log('You are not logged in');
//         //     //     // setAuth(false);
//         //     // }
//         // }
//     )();
// });
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
            {/* <Image
            className="absolute w-full h"
                src={"/img/bg1.jpg"} 
                width={1920}
                height={800}
            > */}

              {/* <h1 className="text:base md:text-3xl w-full text-center -mt">Good Service Safe Traveling</h1> */}
              
            {/* </Image> */}
            <NavBar className="relative" auth={auth} logout={logout}></NavBar>
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
                        <SearchBar className="mt-52"></SearchBar>
                        <h2 className="text-center font-semibold text-4xl pb-8 pt-14 text-white pb-40y
                        "> </h2>
                      </div>  
              </div>
              <div className="w-full px-0 md:px-32 pt-32">
                <div className="flex grid-col-2 justify-between w-full">
                        <div>
                           <div className="w-9 h-1 bg-cyan-900 mb-5"></div>
                            <h1 className="text-cyan-900 text-xl font-bold	">Pupolar Destination</h1>
                        </div>
                        <div>
                            <h1 className="text-cyan-900 text-base">See more</h1>
                        </div>
                </div>
               <div className="mt-10 flex flex-wrap justify-between">
                     <Provincecard Destination={"Shihanoukville"} img={"/img/shihanoukville.jpg"} Decription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."} ></Provincecard>
                     <Provincecard Destination={"Koh Kong"} img={"/img/Koh Kong.jpg"} Decription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."} ></Provincecard>
                     <Provincecard Destination={"Siem Reap"} img={"/img/SiemReap.jpeg"} Decription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."} ></Provincecard>
               </div>
              </div>
              <div className="w-full px-0 md:px-32 pt-10">
                <div className="flex grid-col-2 justify-between w-full">
                        <div>
                           <div className="w-9 h-1 bg-cyan-900 mb-5"></div>
                            <h1 className="text-cyan-900 text-xl font-bold	">Pupolar Routes</h1>
                        </div>
                        <div>
                            <h1 className="text-cyan-900 text-base">See more</h1>
                        </div>
                </div>
               <div className="mt-10 flex flex-col justify-center">
                     <RouteCard></RouteCard>
                     <RouteCard></RouteCard>
                     <RouteCard></RouteCard>
                     <RouteCard></RouteCard>
                     <RouteCard></RouteCard>
               </div>
              </div>

    </>
      
  );
}