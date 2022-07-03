import Image from 'next/image'
import {useEffect,useState} from 'react'
import {useRouter} from "next/router";
import axios from 'axios';
const Register=()=>{

    const [username,setUsername]=useState();
    const [gender,setGender]=useState();
    const [password,setPassword]=useState();
    const [password1,setPassword1]=useState("");
    const [password2,setPassword2]=useState("");
    const [email,setEmail]=useState();
    const [full_name,setFull_name]=useState();
    const [age,setAge]=useState();
    const [phonenumber,setPhonenumber]=useState();
    const [passMessage,setPassMessage]=useState("");
    const router=useRouter();
    const SubmitRegister = async (e) => {
        
        if(password1.localeCompare(password2)){
            setPassword(password1);
            setPassMessage("");
            axios.post('http://localhost:8000/api/register',
                    {
                        'username':username,
                        'full_name':full_name,
                        'gender':gender,
                        'phonenumber':phonenumber,
                        'age':age,
                        "email":email,
                        'password':password

                    }).then(function (response) {
                        alert("register success")
                  })
                .catch((e) => {
                    console.log(e);
                })
        }else{
            setPassMessage("password not match");
            return 0;
        }       
        await router.push('/');
    }
    const submit = async () => {

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
                    axios.post('http://localhost:8000/api/login',{"email":email,'password':password1}
                     ,{
                    credentials: 'include',
                   withCredentials: true,
                }).then(function (response) {
                    console.log(response.data.token);
                    jsCookie.set('jwt',response.data.token,{expires:1/24});
                   // Cookies.set(response.headers['set-cookie'])
                  })
                .catch((e) => {
                    console.log(e);
                })
                    
    }
    return(
            <div className="relative w-full h-full">
                            <Image 
                                src={"/img/bg1.jpg"}
                                layout="fill"
                                objectFit="cover"
                            />    
                            <div className="w-full relative h-screen">
                                    <div className='h-10'>
                                        
                                    </div>
                                   <div className='m-auto p-10 bg-slate-200 shadow-2xl w-full h-fit md:w-2/3 md:h-fit h-fit lg:w-1/2 lg:h-fit  rounded-md'>
                                       <div className='flex justify-center w-full text-cetner text-cyan-900 text-2xl text-bold'>
                                           <h1 className='text-3xl font-bold'>Register</h1>
                                       </div>
                                            <form class="px-8 pt-6 pb-8 mb-4">
                                                <div class="mb-4">
                                                <label class="block mt-2 text-gray-700 text-sm font-bold mb-2" for="username">
                                                    Username
                                                </label>
                                                <input class="focus:ring-4 focus:ring-blue-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={e=>setUsername(e.target.value)}/>
                                                <label class="block mt-2 text-gray-700 text-sm font-bold mb-2" for="fullname">
                                                    Full Name
                                                </label>
                                                <input class="focus:ring-4 focus:ring-blue-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Full Name" onChange={e=>setFull_name(e.target.value)}/>
                                                 <div className='w-full my-3 flex flex-row'>
                                                    <div className="w-1/2 text-cyan-900 font-bold p-2">
                                                        Gender
                                                        <label for="underline_select" class="sr-only">Underline select</label>
                                                        <select onChange={(e)=>{
                                                            setGender(e.target.value)
                                                        }}  id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-cyan-900 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                                            <option selected>Male</option>
                                                            <option value="US">Female</option>
                                                            
                                                        </select>
                                                    </div>
                                                    <div className="w-1/2 text-cyan-900 font-bold p-2">
                                                            <label class="block mt-2 text-gray-700 text-sm font-bold mb-2" for="username">
                                                            Age
                                                            </label>
                                                            <input class="focus:ring-4 focus:ring-blue-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="age" onChange={e=>setAge(e.target.value)}/>
                                                    </div>
                                                </div>
                                                </div>
                                                <label class="block mt-2 text-gray-700 text-sm font-bold mb-2" for="username">
                                                            Phone Number
                                                </label>
                                                <input class="focus:ring-4 focus:ring-blue-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Phone number" onChange={e=>setPhonenumber(e.target.value)}/>
                                                <label class="block mt-2 text-gray-700 text-sm font-bold mb-2" for="username">
                                                    Email
                                                </label>
                                                <input class="focus:ring-4 focus:ring-blue-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
                                               
                                                <div class="mb-6">
                                                <label class="block mt-3
                                                 text-gray-700 text-sm font-bold mb-2" for="password">
                                                    Password
                                                </label>
                                                <input class="focus:ring-4 focus:ring-blue-300 shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="••••••••"onChange={e=>setPassword1(e.target.value)}/>
                                                <label class="block mt-2 text-gray-700 text-sm font-bold mb-2" for="password">
                                                    Verify Password
                                                </label>
                                                <input class="focus:ring-4 focus:ring-blue-300 shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="••••••••"onChange={e=>setPassword2(e.target.value)}/>
                                                
                                                <p class="text-red-500 text-xs italic">{passMessage}</p>
                                                </div>
                                                <div class="flex items-center justify-between">
                                                <button onClick={async () => {
                                                    await axios.post('http://localhost:8000/api/register',
                                                                {
                                                                    'username':username,
                                                                    'full_name':full_name,
                                                                    'gender':gender,
                                                                    'phonenumber':phonenumber,
                                                                    'age':age,
                                                                    "email":email,
                                                                    'password':password1

                                                                }).then(function (response) {
                                                                    alert("register success")
                                                            })
                                                            .catch((e) => {
                                                                console.log(e);
                                                            })
                                                            submit();
                                                            await router.push('/');
                                                    // console.log(password1,password2)
                                                    // if(!password1.localeCompare(password2)){
                                                    //     setPassword(password1);
                                                    //     setPassMessage("");
                                                        
                                                    // }else{
                                                    //     setPassMessage("password not match");
                                                    // }       
                                                    }} class="bg-cyan-900 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
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
export default Register;