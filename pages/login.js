import Image from 'next/image'
import axios from 'axios';
import { useState } from "react";
import Router from 'next/router'; 
import { login } from './api/hello';
import {useRouter} from "next/router";
import jsCookie from 'js-cookie';
const Login=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const submit = async (e) => {
        e.preventDefault();

        // await fetch(`http://localhost:8000/api/login`, {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     credentials: 'include',
        //     mode: 'cors',
        //     body: JSON.stringify({
        //         email,
        //         password
        //     })
        // });
                    axios.post('http://localhost:8000/api/login',{"email":email,'password':password}
                     ,{
                    mode: 'cors',
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include',
                   // withCredentials: true,
                }).then(function (response) {
                    console.log(response.data.token);
                    jsCookie.set('jwt',response.data.token,{expires:1/24});
                   // Cookies.set(response.headers['set-cookie'])
                  })
                .catch((e) => {
                    console.log(e);
                })
                    

        await router.push('/');
    }
    return(
            <div className="relative w-full h-full">
                            <Image 
                                src={"/img/bg1.jpg"}
                                layout="fill"
                                objectFit="cover"
                            />    
                            <div className="w-full relative h-screen">
                                    <div className='h-32'>
                                        
                                    </div>
                                   <div className='m-auto p-10 bg-slate-200 shadow-2xl w-full h-fit md:w-1/3 md:h-fit rounded-md'>
                                       <div className='flex justify-center w-full text-cetner text-cyan-900 text-2xl text-bold'>   
                                           <h1 className='text-3xl font-bold'>Login</h1>  
                                       </div>
                                            <form class="px-8 pt-6 pb-8 mb-4" onSubmit={submit}>
                                                <div class="mb-4">
                                                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                                    Username
                                                </label>
                                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={e=>setEmail(e.target.value)}/>
                                                </div>
                                                <div class="mb-6">
                                                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                                    Password
                                                </label>
                                                <input class="shadow appearance-none border focus:border-cyan-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={e=>setPassword(e.target.value)}/>
                                                {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
                                                </div>
                                                <div class="flex items-center justify-between">
                                                <button class="bg-cyan-900 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                                    Sign In
                                                </button>
                                                <a class="inline-block align-baseline font-bold text-sm text-cyan-900 hover:text-cyan-700" href="#">
                                                    Forgot Password?
                                                </a>
                                                </div>
                                            </form>
                                            <p class="text-center text-gray-500 text-xs">
                                                &copy;2022 Acme Corp. All rights reserved.
                                            </p>
                                   </div>
                            </div>     
                                 
            </div>  

    )
}
export default Login;