import Image from 'next/image'
import {useState,useEffect} from 'react';
import axios from 'axios';
const AddRoute=()=>{
    const [open,setOpen]=useState(false);
    const [CompanyData,setCompanyData]=useState();
    const [Province,setProvince]=useState();
    const [Departure_Date,setDeparture_Date]=useState();
    const [Departure_Time,setDeparture_Time]=useState();
    const [Arrival_Date,setArrival_Date]=useState();
    const [Arrival_Time,setArrival_Time]=useState();
    const [Departure_Point,setDeparture_Point]=useState();
   const [Destination_Point,setDestination_Point]=useState();
   const [Number_Seat,setNumber_Seat]=useState();

    const SubmitRegister = async (e) => {
        e.preventDefault();
                    axios.post('http://localhost:8000/api/addroute',
                    {
                        'departure_date':Departure_Date,
                        'arrival_date':Arrival_Date,
                        'departure_time':Departure_Time,
                        'arrival_time':Arrival_Time,
                        'departure_location':Departure_Point,
                        'destination_location':Destination_Point,
                        'number_busseat':Number_Seat
                    },{
                        withCredentials: true,
                        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
                    }).then(function (response) {
                        console.log("success")
                  })
                .catch((e) => {
                    console.log(e);
                })
                    setOpen(false)
    }
    useEffect(()=>{
        axios.get('http://localhost:8000/api/province',).then(response => { 
          setProvince(response.data)
        }).catch((e)=>{
                console.log("Not login")
        })
                  
    },[]);
    if(open){
        return(<>
            <button  onClick={()=>{
                setOpen(true)
            }}  type="button" data-modal-toggle="authentication-modal" className="w-10 h-10 p-2 bg-cyan-900 rounded-xl focus:ring-4 focus:ring-blue-300 mx-2"><Image width="100%" height="100%" layout="responsive" src={"/img/add1.png"}></Image></button>          
                <div class="fixed w-screen md:inset-0 h-screen  m-auto pt-52 bg-opacity-50 bg-white">
                <div class="relative p-2 w-3/4 max-w-md h-full md:h-auto m-auto">

                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button   onClick={()=>{
                setOpen(false)
            }}  type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="py-6 px-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                <form onSubmit={SubmitRegister} class="space-y-6" action="#">
                <div className='w-full my-3 flex flex-row'>
                                                    <div className="w-1/2 text-cyan-900 font-bold p-2">
                                                        Departure point
                                                        <label for="underline_select" class="sr-only">Underline select</label>
                                                        <select onChange={e=>{setDeparture_Point(e.target.value)}} id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-cyan-900 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                                            
                                                            {
                                                                Province.map((number) =>
                                                                <option value={number.province_name}>{number.province_name}</option>
                                                                )
                                                            }

                                                        </select>
                                                    </div>
                                                    <div className="w-1/2 text-cyan-900 font-bold p-2">
                                                        Destination Point
                                                        <label for="underline_select" class="sr-only">Underline select</label>

                                                            <select onChange={e=>{setDestination_Point(e.target.value)}} id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-cyan-900 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                                            <option selected>Male</option>
                                                            {
                                                                Province.map((number) =>
                                                                <option value={number.province_name}>{number.province_name}</option>
                                                                )
                                                            }
                                                            
                                                        </select>                                                    </div>
                                                   </div>
                                <div className='w-full my-3 flex flex-row'>
                                                    <div className="w-1/2 text-cyan-900 font-bold p-2">
                                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Departure Date</label>
                                                        <input onChange={e=>{setDeparture_Date(e.target.value)}} type="date" name="password" id="password" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                                                    </div>
                                                    <div className="w-1/2 text-cyan-900 font-bold p-2">
                                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Arrival Date</label>
                                                        <input onChange={e=>{setArrival_Date(e.target.value)}} type="date" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                                                    </div>
                                                    
                                </div>
                                <div className='w-full my-3 flex flex-row'>
                                                    <div className="w-1/2 text-cyan-900 font-bold p-2">
                                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Departure Time</label>
                                                        <input onChange={e=>{setDeparture_Time(e.target.value)}} type="time" name="password" id="password" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                                                    </div>
                                                    <div className="w-1/2 text-cyan-900 font-bold p-2">
                                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Arrival Time</label>
                                                        <input onChange={e=>{setArrival_Time(e.target.value)}} type="time" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                                                    </div>
                                                    
                                </div>
                                <div className="w-full text-cyan-900 font-bold p-2">
                                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Arrival Date</label>
                                                        <input onChange={e=>{setNumber_Seat(e.target.value)}} type="number" name="password" id="password" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                                                    </div>
                                <button class="bg-cyan-900 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                                    Sign In
                                                </button>
                </form>
                </div>
                </div>
                </div>
                </div>

        </>)
    }else{
        return(<div>
            <button onClick={()=>{
                setOpen(true)
            }} type="button" data-modal-toggle="authentication-modal" className="w-10 h-10 p-2 bg-cyan-900 rounded-xl focus:ring-4 focus:ring-blue-300 mx-2"><Image width="100%" height="100%" layout="responsive" src={"/img/add1.png"}></Image></button>          

                <div class="hidden w-3/4 md:inset-0 h-modal md:h-full justify-center items-center">
                <div class="relative p-4 w-full max-w-md h-full md:h-auto">

                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button   onClick={()=>{
                setOpen(false)
            }}  type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="py-6 px-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                <form class="space-y-6" action="#">
                <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""/>
                </div>
                <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                </div>
                <div class="flex justify-between">
                <div class="flex items-start">
                <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
                </div>
                <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                </div>
                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                </div>
                </form>
                </div>
                </div>
                </div>
                </div>

</div>)
    }
}
export default AddRoute;