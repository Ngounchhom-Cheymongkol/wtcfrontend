import RouteCard from "../../components/Dashboard/RouteCard"
import {useState,useEffect} from 'react'
import NavBar from "../../components/Dashboard/NavBar";
import Image from 'next/image'
import AddRoute from "../../components/Dashboard/AddRoute";
import SideBar from "../../components/Dashboard/sidebar";
import axios from "axios";
import {useRouter} from "next/router";
import Link from "next/link";
const Booking=()=>{
    const [OwnBooking,setOwnBooking]=useState([]);
    const [loading, setLoading] = useState(false);
    const [auth, setAuth] = useState(false);
    const router = useRouter();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/user',{
            withCredentials: true,
          }).then(response => { 
            setAuth(true)
          }).catch((e)=>{
            setAuth(false);
          })
          setLoading(true);
          axios.get('http://localhost:8000/api/ownbooking',{
            withCredentials: true,
          }).then(response => { 
            setOwnBooking(response.data)
          }).catch((e)=>{
            setAuth(false);
          }).finally(() => {
            setLoading(false);
          }); 
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
      const cancelbooking = async () => {
        alert("Kingdom");
        await fetch('http://localhost:8000/api/cancelbooking',{'id':2}, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        }).then(response=>{
            console.log(response.data)
        })
      }
    if(!auth){
        return(<div className="text-3xl text-red-600">ONLY Login User Can Access This page</div>)
    }else{ 
        
    return(
            <>
            <NavBar></NavBar>
            <div className="w-full flex bg-slate-200">
                 <SideBar logout={logout}></SideBar>
                
                <div className="grow mt-16 ml-16 p-10">
                    <div className="flex grid-col-2 justify-between w-full">
                            <div>
                               <div className="w-9 h-1 bg-cyan-900 mb-5"></div>
                                <h1 className="text-cyan-900 text-xl font-bold">Your Booking</h1>
                            </div>
                    </div>
                    
                            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                ID
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Company
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Departure-Destination
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Departure_DateTime
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Arrival_DateTime
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Seat_number
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                <span class="sr-only">Print</span>
                                                
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                
                                                <span class="sr-only">Delete</span>
                                            </th>
                                        </tr>
                                </thead>
                                <tbody>
                                    
                                    { loading ? (<div className="w-full flex flex-wrap justify-center"><img src='https://freedomplazaarizona.com/wp-content/uploads/2018/04/Loading.gif'className='h-32'></img> loading </div>) :
                                    OwnBooking.map((item) => (              
                                                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                {item.id}
                                                </th>
                                                <td class="px-6 py-4">
                                                {item.company_name}
                                                </td>
                                                <td class="px-6 py-4">
                                                {item.departure_location} <b> to </b> {item.destination_location}
                                                </td>
                                                <td class="px-6 py-4">
                                                {item.departure_date} - {item.departure_time}
                                                </td>
                                                <td class="px-6 py-4">
                                                {item.arrival_date} - {item.arrival_time}
                                                </td>
                                                <td class="px-6 py-4">
                                                {item.seat_number}
                                                </td>
                                                <td class="px-6 py-4">
                                                <Link
                                                                        href={{
                                                                            pathname: "/Dashboad/ticket",
                                                                            query: {id:item.id} // the data
                                                                        }}
                                                                >
                                                        <button className="text-white text-base bg-cyan-900  font-medium px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-300 dark:hover:bg-blue-300 dark:focus:ring-blue-300 hover:ring-4 hover:ring-blue-300 w-full h-full">
                                                    Print Ticket
                                                </button>
                                            </Link>
                                                </td>
                                                <td class="px-6 py-4 text-right">
                                                    {/* <button href="#" class="font-medium text-white bg-cyan-900 focus:ring-2 focus:ring-blue-300 rounded-md p-2 mx-2">Edit</button> */}
                                                    
                                                    <button value="Refresh Page" onClick={ async () => {
                                                        confirm("Are You sure to caancel this");
                                                        // alert("Kingdom");
                                                        // await fetch('http://localhost:8000/api/cancelbooking',{'id':item.id}, {
                                                        //     method: 'POST',
                                                        //     headers: {'Content-Type': 'application/json'},
                                                        //     credentials: 'include',
                                                        // }).then(response=>{
                                                        //     console.log(response.data)
                                                        // })
                                                        await axios.post('http://localhost:8000/api/cancelbooking',
                                                        {
                                                            'id':item.id,
                                                        },{
                                                            withCredentials: true,
                                                            headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
                                                        }).then(function (response) {
                                                            console.log("success")
                                                    })
                                                    await axios.get('http://localhost:8000/api/ownbooking',{
                                                        withCredentials: true,
                                                      }).then(response => { 
                                                        setOwnBooking(response.data)
                                                      }).catch((e)=>{
                                                        setAuth(false);
                                                      }).finally(() => {
                                                        setLoading(false);
                                                      }); 
                                                    }} class="font-medium text-white bg-red-500 focus:ring-2 focus:ring-blue-300 rounded-md p-2 mx-2">Cancel</button>
                                                </td>
                                                </tr>
                                        ))}
                                    
                                    </tbody>
                                </table>
                            </div>
    
                </div>
            </div>
            </>
            
            
        )
    }
}
export default Booking;