import {useRouter} from "next/router";
import Link from "next/link";
import { useState,useEffect } from "react";
import axios from "axios";
const SearchBar=()=>{
    var today = new Date();
    var date = today.getFullYear()+'-'+("0" +(today.getMonth()+1)).slice(-2)+'-'+today.getDate();
    const [Province,setProvince]=useState([]);
    const [Departure_Date,setDeparture_Date]=useState(date);
    const [Departure_Point,setDeparture_Point]=useState("null");
   const [Destination_Point,setDestination_Point]=useState("null");
    const router = useRouter();
    useEffect(()=>{
        axios.get('http://localhost:8000/api/province',).then(response => { 
          setProvince(response.data)
        }).catch((e)=>{
                console.log(e)
        })
                  
    },[]);
    return(
        <div className="flex flex-col  bg-white shadow-md   w-ful lg:flex-row lg:w-2/3">
                <div class="grow h-fit flex flex-wrap p-5 md:h-36">
                    <div class="grid grid-cols-row ... md:grid-cols-3 w-full">
                            <div className="w-2/3 text-cyan-900 text-base font-bold">
                                Departure point
                                <label for="underline_select" class="sr-only">Underline select</label>
                                <select onChange={e=>{
                                    setDeparture_Point(e.target.value)
                                }} id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option value={'null'} selected>none</option>
                                    {
                                            Province.map((number) =>
                                                    <option value={number.province_name}>{number.province_name}</option>
                                                )
                                            }
                                </select>
                            </div>

                            <div className="w-2/3 text-cyan-900 font-bold">
                                Destination point
                                <label for="underline_select" class="sr-only">Underline select</label>
                                <select  onChange={e=>{
                                    setDestination_Point(e.target.value)
                                }} id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option value='null' selected>none</option>
                                {
                                            Province.map((number) =>
                                                    <option value={number.province_name}>{number.province_name}</option>
                                                )
                                            }
                                </select>
                            </div>
                            <div className="w-2/3 text-cyan-900 font-bold">
                                Date
                                <label for="underline_select" class="sr-only">Underline select</label>
                                <input type='date' value={Departure_Date} onChange={e=>{
                                    setDeparture_Date(e.target.value)
                                }} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-cyan-900 appearance-none dark:text-cyan-700 dark:border-cyan-800 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"></input>
                                {/* <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option selected>Choose a country</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select> */}
                            </div>
                    </div>
                </div>
                <div class="flex--wrap w-full h-20 ... bg-cyan-900 text-center lg:flex-none lg:w-36 lg:h-36">
                <Link
                                            href={{
                                                pathname: "/search",
                                                query: {departure_location:Departure_Point,
                                                    destination_location:Destination_Point,
                                                    departure_date:Departure_Date} // the data
                                            }}
                                    >
                            <button className="text-white text-base bg-cyan-900  font-medium px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-300 dark:hover:bg-blue-300 dark:focus:ring-blue-300 hover:ring-4 hover:ring-blue-300 w-full h-full">
                        Search
                    </button>
                </Link>
                {/* onClick={async()=>{
                                console.log({
                                    departure_location:Departure_Point,
                                    destination_location:Destination_Point,
                                    depatrure_date:Departure_Date
                                })
                        await axios.post("http://127.0.0.1:8000/api/search",{
                                departure_location:Departure_Point,
                                destination_location:Destination_Point,
                                depatrure_date:Departure_Date
                            }).then(response=>{
                            setRouteData(response.data);
                            console.log(RouteData)
                            }).catch(e=>{
                            console.log(e)
                            })
                            // await router.push({           pathname: "/search",
                            //                         query: {RouteData} // the data
                            //                     },'/search')
                    }}  */}
                </div>
            </div>
    )
}
export default SearchBar;