import React from "react";
import Image from 'next/image'
import {useState,useEffect} from 'react';
import axios from 'axios';
export default function EditRoute(prop){
  const [showModal, setShowModal] = React.useState(false);
  const [EditData,setEditData]=useState();
  const [Province,setProvince]=useState();
  const [Departure_Date,setDeparture_Date]=useState("");
  const [Departure_Time,setDeparture_Time]=useState("");
  const [Arrival_Date,setArrival_Date]=useState("");
  const [Arrival_Time,setArrival_Time]=useState("");
  const [Departure_Point,setDeparture_Point]=useState("");
 const [Destination_Point,setDestination_Point]=useState("");
 const [Number_Seat,setNumber_Seat]=useState(0);
 const [Price,setPrice]=useState(0);
  const SubmitRegister = async (e) => {
            await axios.post('http://localhost:8000/api/admin/edit/'+prop.id,{
                withCredentials: true,
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
            }).then(response => {
                setEditData(response.data)
                setDeparture_Date(response.data.departure_date);
                setDeparture_Time(response.data.departure_time);
                setDestination_Point(response.data.destination_location);
                setDeparture_Point(response.data.departure_location);
                setArrival_Time(response.data.arrival_time);
                setArrival_Date(response.data.arrival_date);
                setNumber_Seat(response.data. number_busseat);
                setPrice(response.data.price);
            }).catch((e)=>{
                    console.log("Not login")
            })}
  useEffect(()=>{
      axios.get('http://localhost:8000/api/province',).then(response => { 
        setProvince(response.data)
      }).catch((e)=>{
              console.log("Not login")
      })
           
  },[]);
  
  return (
    <>
      <button
        className="bg-cyan-900 text-white active:ring-blue-200 focus:ring-2 react font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={async () => {
            await SubmitRegister();
            setShowModal(true);
        }}
      >
        Edit
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-3/4 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add New Route
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <form class="space-y-6" action="#">
                <div className='w-full my-3 flex flex-row'>
                                                    <div className="w-1/2 text-cyan-900 font-bold p-2">
                                                        Departure point
                                                        <label for="underline_select" class="sr-only">Underline select</label>
                                                        <select onChange={e=>{setDeparture_Point(e.target.value)}} id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-cyan-900 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                                        <option selected value={EditData.departure_location}>{EditData.departure_location} </option>
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
                                                            <option selected value={EditData.destination_location}>{EditData.destination_location}</option>
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
                                                        <input onChange={e=>{setDeparture_Date(e.target.value)}} value={EditData.departure_date} type="date" name="password" id="password" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                                                    </div>
                                                    <div className="w-1/2 text-cyan-900 font-bold p-2">
                                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Arrival Date</label>
                                                        <input onChange={e=>{setArrival_Date(e.target.value)}} value={EditData.arrival_date} type="date" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                                                    </div>
                                                    
                                </div>
                                <div className='w-full my-3 flex flex-row'>
                                                    <div className="w-1/2 text-cyan-900 font-bold p-2">
                                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Departure Time</label>
                                                        <input onChange={e=>{setDeparture_Time(e.target.value)}} value={EditData.departure_time} type="time" name="password" id="password" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                                                    </div>
                                                    <div className="w-1/2 text-cyan-900 font-bold p-2">
                                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Arrival Time</label>
                                                        <input onChange={e=>{setArrival_Time(e.target.value)}} value={EditData.arrival_time} type="time" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                                                    </div>
                                                    
                                </div>
                                <div className="w-full text-cyan-900 font-bold p-2">
                                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Number Seat</label>
                                                        <input onChange={e=>{setNumber_Seat(e.target.value)}} value={EditData.number_busseat} type="number" name="password" id="password" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                                                    </div>
                                                    <div className="w-full text-cyan-900 font-bold p-2">
                                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                                                        <input onChange={e=>{setPrice(e.target.value)}} value={EditData.price} type="number" name="password" id="password" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                                                    </div>
                                {/* <button class="bg-cyan-900 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                                    Sign In
                                                </button> */}
                                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                    <button
                                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        Close
                                                    </button>
                                                    <button
                                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={async (e) => {
                                                            await axios.put('http://localhost:8000/api/admin/update/'+prop.id,
                                                            { 
                                                                'departure_date':Departure_Date,
                                                                'arrival_date':Arrival_Date,
                                                                'departure_time':Departure_Time,
                                                                'arrival_time':Arrival_Time,
                                                                'departure_location':Departure_Point,
                                                                'destination_location':Destination_Point,
                                                                'number_busseat':Number_Seat,
                                                                'price':Price
                                                            },{
                                                                withCredentials: true,
                                                                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
                                                            }).then(function (response) {
                                                                alert("success")
                                                        })
                                                                      setShowModal(false)
                                                          }}
                                                    >
                                                        Save Route
                                                    </button>
                                                    </div>
                </form>
                </div>
                {/*footer*/}
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}