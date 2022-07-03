import RouteCard from "../../components/Dashboard/RouteCard"
import {useState,useEffect} from 'react'
import NavBar from "../../components/Dashboard/NavBar";
import Image from 'next/image'
import AddRoute2 from "../../components/Dashboard/AddRoute2";
import SideBar from "../../components/Dashboard/sidebar";
import axios from "axios";
import {useRouter} from "next/router";
import EditRoute from "../../components/Dashboard/EditRoute";
import Link from "next/link";
const Admin=()=>{
    const [OwnRoute,setOwnRoute]=useState([]);
    const [loading, setLoading] = useState(false);
    const [auth, setAuth] = useState(false);
    const [CheckAdmin, setCheckAdmin] = useState(false);
    const [userdata,setuserdata]=useState(0)
    const router = useRouter();
    const [Seat_number1,setSeat_number1]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/user',{
            withCredentials: true,
          }).then(response => {
             setAuth(true)
             //console.log(response.data.role_id)
             setuserdata(response.data.role_id)
            }).catch((e)=>{
            setAuth(false);
          })
          if(userdata==2){
            
          }else{
            setLoading(true)
            fetch('http://localhost:8000/api/ownroute',{credentials:'include'}).then(response =>response.json()).then(data=>{
                    setOwnRoute(data)
                     axios.post('http://localhost:8000/api/bookseat',{
                        route_id:data.id
                    },{
                        withCredentials: true,
                  }).then(response => { 
                        setSeat_number1(response.data)
                        console.log(Seat_number1)
                    }).catch((e)=>{
                            return e
                    })
                }).catch((e)=>{
                            console.log(e) 
                    }).finally(() => {
                        setLoading(false);
                    }); 
          }
       
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
    if(!auth){
        return(<div className="text-3xl text-red-600">ONLY Login User Can Access This page</div>)
    }else{
        if(userdata==1){
                return(
                <>
                <NavBar></NavBar>
                <div className="w-full flex bg-slate-200">
                    <SideBar logout={logout}></SideBar>
                    
                    <div className="grow mt-16 ml-16 p-10">
                        <div className="flex grid-col-2 justify-between w-full">
                                <div>
                                <div className="w-9 h-1 bg-cyan-900 mb-5"></div>
                                    <h1 className="text-cyan-900 text-xl font-bold">Routes</h1>
                                </div>
                                <div>
                                    {/* <button className="w-10 h-10 p-2 bg-cyan-900 rounded-xl focus:ring-4 focus:ring-blue-300 mx-2"><Image width="100%" height="100%" layout="responsive" src={"/img/add1.png"}></Image></button> */}
                                    <AddRoute2></AddRoute2>
                                    {/* <button className="w-10 h-10 p-2 bg-cyan-900 rounded-xl focus:ring-4 focus:ring-blue-300 mx-2"><Image width="100%" height="100%" layout="responsive" src={"/img/delete2.png"}></Image></button> */}
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
                                                    Departure-Destination
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Departure_DateTime
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Arrival_DateTime
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Price
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Booking
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    <span class="sr-only">Edit</span>
                                                    <span class="sr-only">Delete</span>
                                                </th>
                                                
                                            </tr>
                                    </thead>
                                    <tbody>
                                        { loading ? (<div className="w-full flex flex-wrap justify-center"> <div className="text-cyan-900 font-bold text-2xl my-auto">loading</div><img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif'className='h-10 ml-5'></img>  </div>) :
                                        OwnRoute.map((item) => (              
                                                    <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    {item.id}
                                                    </th>
                                                    <td class="px-6 py-4">
                                                    {item.departure_location} <b>to</b> {item.destination_location}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                    {item.departure_date} - {item.departure_time}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                    {item.arrival_date} - {item.arrival_time}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {item.price} រៀល
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {Seat_number1}
                                                    </td>
                                                    <td class="px-6 py-4 text-right flex flex-wrap justify-between">
                                                    <Link 
                                                                        href={{
                                                                            pathname: "/Dashboad/bookingUser",
                                                                            query: {id:item.id} // the data
                                                                        }}
                                                                        >
                                                                <button className="text-white text-base bg-cyan-900  font-medium px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-300 dark:hover:bg-blue-300 dark:focus:ring-blue-300 hover:ring-4 hover:ring-blue-300 w-fit h-full">
                                                            View
                                                        </button>
                                                    </Link>
                                                        <EditRoute id={item.id}></EditRoute>
                                                        <a href="#" onClick={async ()=>{
                                                            
                                                            confirm("Are You sure to Delete this Route");
                                                            // alert("Kingdom");
                                                            // await fetch('http://localhost:8000/api/cancelbooking',{'id':item.id}, {
                                                            //     method: 'POST',
                                                            //     headers: {'Content-Type': 'application/json'},
                                                            //     credentials: 'include',
                                                            // }).then(response=>{
                                                            //     console.log(response.data)
                                                            // })
                                                            await axios.post('http://localhost:8000/api/cancelroute/'+item.id,{
                                                                withCredentials: true,
                                                                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
                                                            }).then(function (response) {
                                                                console.log("success")
                                                            })
                                                        setLoading(true);
                                                        await fetch('http://localhost:8000/api/ownroute',{credentials:'include'}).then(response =>response.json()).then(data=>{
                                                            setOwnRoute(data)
                                                            setLoading(true)
                                                        }).catch((e)=>{
                                                                    console.log(e) 
                                                            }).finally(() => {
                                                                setLoading(false);
                                                            });
                                                        }} class="font-medium text-white bg-red-500 focus:ring-2 focus:ring-blue-300 rounded-md p-2 mx-2">Delete</a>
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
        } else{
            return(
                <>
                <NavBar></NavBar>
                <div className="w-full flex bg-slate-200">
                    <SideBar logout={logout}></SideBar>
                    
                    <div className="grow mt-16 ml-16 p-10">
                        <div className="flex grid-col-2 justify-between w-full">
                                <div>
                                <div className="w-9 h-1 bg-cyan-900 mb-5"></div>
                                    <h1 className="text-cyan-900 text-xl font-bold">Routes</h1>
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
                                                    Departure-Destination
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Departure_DateTime
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Arrival_DateTime
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Price
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Booking
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    <span class="sr-only">Edit</span>
                                                    <span class="sr-only">Delete</span>
                                                </th>
                                                
                                            </tr>
                                    </thead>
                                    
                                    </table>
                                </div>
        
                    </div>
                </div>
                </>
            )
        }
   
    }
}
export default Admin;