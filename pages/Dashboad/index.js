import {useState,useEffect} from 'react'
import NavBar from "../../components/Dashboard/NavBar";
import SideBar from "../../components/Dashboard/sidebar";
import axios from "axios";
import {useRouter} from "next/router";
const Dashboad=()=>{
    //const [OwnRoute,setOwnRoute]=useState([]);
    const [DataUser,setDataUser] = useState({});
    const [auth,setAuth] = useState(false);
    const router = useRouter();
        useEffect(()=>{
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
                        <div className='w-full h-fit'> <img src='profile/profile_img.jpg' className='h-40 w-40 m-auto rounded-full'></img></div>
                        {/* <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style="background-image: url('https://source.unsplash.com/MP0IUfwrn0A')"></div> */}
                        <h1 class="text-3xl font-bold pt-8 lg:pt-0 mt-10 w-full text-center">{DataUser.full_name}</h1>
                        <div class="mx-auto w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                        <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><svg class="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg> {DataUser.username}</p>
                        <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><svg class="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"/></svg> Phnom Penh</p>
                        <p class="pt-8 text-sm">Totally optional short description about yourself, what you do and so on.</p>
                    </div>
                </div>
            </div>
            </>
            
            
        )
    }
}
export default Dashboad;