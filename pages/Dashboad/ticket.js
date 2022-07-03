import {useState,useEffect} from 'react'
import NavBar from "../../components/Dashboard/NavBar";
import SideBar from "../../components/Dashboard/sidebar";
import axios from "axios";
import {useRouter} from "next/router";
const Ticket=()=>{
    //const [OwnRoute,setOwnRoute]=useState([]);
    const [DataUser,setDataUser] = useState({});
    const [DataUser1,setDataUser1] = useState({});

    const [auth,setAuth] = useState(false);
    const router = useRouter();
    

    // console.log(data.id)
        useEffect((e)=>{
          
        axios.get('http://localhost:8000/api/user',{
        withCredentials: true,
      }).then(response => { 
        setAuth(true);
        setDataUser(new Object(response.data));
      }).catch((e)=>{
        console.log(e)
              console.log("Not login")
                setAuth(false);
      })
      axios.get('http://localhost:8000/api/bookingdetail/'+router.query.id,{
        withCredentials: true,
      }).then(response => {  
        response.data.map(item=>{
          setDataUser1(item);
        })
        
      }).catch((e)=>{
        console.log(e)      
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
    if(!auth){
        return(<div className="text-3xl text-red-600">ONLY Login User Can Access This page</div>)
    }else{ 
        
    return(
            <>
            <NavBar></NavBar>
            <div className="w-full flex bg-slate-200">
                 <SideBar logout={logout}></SideBar>
                <div className="grow mt-20 p-10">
                    <div className='w-4/5 h-fit m-auto p-10 bg-white shadow-md rounded-md'>
                        <div className='w-full h-fit'> <img src={DataUser1.company_image} className='h-40 m-auto'></img></div>
                        {/* <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style="background-image: url('https://source.unsplash.com/MP0IUfwrn0A')"></div> */}
                        <h1 class="text-3xl font-bold pt-8 lg:pt-0 mt-10 w-full text-center">{DataUser1.company_name}</h1>
                        <div className='w-full flex flex-wrap justify-between px-10 mt-5'> <div>Departure : {DataUser1.departure_location}</div><div>{DataUser1.departure_date}-{DataUser1.departure_time}</div></div>
                        <div className='w-full flex flex-wrap justify-between px-10'> <div>Destination : {DataUser1.destination_location}</div><div>{DataUser1.arrival_date}-{DataUser1.arrival_time}</div> </div>
                        <div className='text-xl text-cyan-900 px-10'>Seat_number : {DataUser1.seat_number}</div>
                        <div class="mx-auto w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                        <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><svg class="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg> {DataUser.full_name}</p>
                        <div className='text-blue-700'>#{DataUser1.username}</div>
                    </div>
                </div>
            </div>
            </>
            
            
        )
    }
}
export default Ticket;