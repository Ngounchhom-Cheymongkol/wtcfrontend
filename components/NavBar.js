import React from "react";
import {useRouter} from "next/router";
//import { useState } from "react/cjs/react.production.min";

const NavBar=({auth,logout,activevalue})=>{
        
    const router = useRouter();
    const [openTab, setOpenTab] = React.useState(activevalue);
        if(!auth){
                        return(
                        <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                        <div class="container flex flex-wrap justify-between items-center mx-auto">
                                <a class="flex items-center">
                                {/* <img src="/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/> */}
                                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">BookUsNow</span>
                        </a>
                        <div class="flex md:order-2">
                                <button onClick={()=>{
                                        router.push('/login');
                                }} type="button" class="text-white bg-cyan-900 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-cyan-900 dark:hover:bg-cyan-700 dark:focus:ring-blue-800 mx-5">Login</button>
                                <button onClick={()=>{
                                        router.push('/register');
                                }} href='/register'type="button" class="text-white bg-cyan-900 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-cyan-900 dark:hover:bg-cyan-700 dark:focus:ring-blue-800 mx-5">Register</button>
                                <button data-collapse-toggle="mobile-menu-4" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                        </div>
                                <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                                        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                                                <li>
                                                <a href="/" class={"block py-2 pr-4 pl-3 text-white text-base md:bg-transparent md:text-black md:p-0 dark:text-white rounded-none hover:text-red-800"+
                                                        (openTab === 1
                                                        ? "text-black border-b-2 border-b-cyan-900"
                                                        : "text-black-600 bg-white")} aria-current="page">Home</a>
                                                </li>
                                                <li>
                                                <a href="/route" class={"block py-2 pr-4 pl-3 text-white text-base md:bg-transparent md:text-black md:p-0 dark:text-white rounded-none hover:border-b-cyan-500"+
                                                        (openTab === 2
                                                        ? "text-black border-b-2 border-b-cyan-900"
                                                        : "text-black-600 bg-white")}>Services</a>
                                                </li>
                                                <li>
                                                <a href="/company" class={"block py-2 pr-4 pl-3 text-white text-base md:bg-transparent md:text-black md:p-0 dark:text-white rounded-none hover:border-b-cyan-500"+
                                                        (openTab === 3
                                                        ? "text-black border-b-2 border-b-cyan-900"
                                                        : "text-black-600 bg-white")}>Company</a>
                                                </li>
                                                <li>
                                                <a href="/about" class={"block py-2 pr-4 pl-3 text-white text-base md:bg-transparent md:text-black md:p-0 dark:text-white rounded-none hover:border-b-cyan-500"+
                                                        (openTab === 4
                                                        ? "text-black border-b-2 border-b-cyan-900"
                                                        : "text-black-600 bg-white")}>About</a>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                        </nav>

                
        );
        }else{
                return(
                        <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                        <div class="container flex flex-wrap justify-between items-center mx-auto">
                                <a href="https://flowbite.com" class="flex items-center">
                                {/* <img src="/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/> */}
                                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">BookUsNow</span>
                        </a>
                        <div class="flex md:order-2">
                                <h1  onClick={()=>{
                                        router.push('/Dashboad');
                                }} ><img className="h-10 w-10 rounded-full" src="profile/profile_img.jpg"></img></h1>
                                <button onClick={logout} href='/register'type="button" class="text-white bg-cyan-900 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-cyan-900 dark:hover:bg-cyan-700 dark:focus:ring-blue-800 mx-5">Logout</button>
                                <button data-collapse-toggle="mobile-menu-4" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                        </div>
                                <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                                        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                                        <li>
                                                <a href="/" class={"block py-2 pr-4 pl-3 text-white text-base md:bg-transparent md:text-black md:p-0 dark:text-white rounded-none hover:text-red-800"+
                                                        (openTab === 1
                                                        ? "text-black border-b-2 border-b-cyan-900"
                                                        : "text-black-600 bg-white")} aria-current="page">Home</a>
                                                </li>
                                                <li>
                                                <a href="/route" class={"block py-2 pr-4 pl-3 text-white text-base md:bg-transparent md:text-black md:p-0 dark:text-white rounded-none hover:border-b-cyan-500"+
                                                        (openTab === 2
                                                        ? "text-black border-b-2 border-b-cyan-900"
                                                        : "text-black-600 bg-white")}>Services</a>
                                                </li>
                                                <li>
                                                <a href="/company" class={"block py-2 pr-4 pl-3 text-white text-base md:bg-transparent md:text-black md:p-0 dark:text-white rounded-none hover:border-b-cyan-500"+
                                                        (openTab === 3
                                                        ? "text-black border-b-2 border-b-cyan-900"
                                                        : "text-black-600 bg-white")}>Company</a>
                                                </li>
                                                <li>
                                                <a href="/about" class={"block py-2 pr-4 pl-3 text-white text-base md:bg-transparent md:text-black md:p-0 dark:text-white rounded-none hover:border-b-cyan-500"+
                                                        (openTab === 4
                                                        ? "text-black border-b-2 border-b-cyan-900"
                                                        : "text-black-600 bg-white")}>About</a>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                        </nav>

                
        );
        }

   
}
export default NavBar;