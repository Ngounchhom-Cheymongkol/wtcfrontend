import axios from 'axios'
import jsCookie from 'js-cookie'
import {useEffect,useState} from 'react'
import Image from 'next/image'
function RouteCard(prop) {
      const [Open,setOpen]=useState(false)
      const [Seat_number,setSeat_number]=useState(0)
      const [Seat_number1,setSeat_number1]=useState([])
      useEffect(()=>{
              axios.post('http://localhost:8000/api/bookseat',{
                  route_id:prop.item.id
              },{
                  withCredentials: true,
            }).then(response => { 
                  setSeat_number1(response.data)
                  
              }).catch((e)=>{
                      return e
              })
      },[])
      var Arr=[];
      for(var i=1;i<=prop.item.number_busseat;i++){
            Arr.push(i);
      }
      
    return (
      <div className='flex flex-col border-2 bg-white focus:ring-blue-300 shadow-md w-full md:w-full lg:w-full mt-3'>
                                <div className='h-24 md:h-32 flex'>
                                    <div className='flex-none md-full  w-24 md:w-32 bg-slate-700 p-2'  relative>
                                          <img width="100%" height="100%" layout="responsive" src={prop.item.image}></img>
                                          <div className='text-white mt-3 w-full text-center'>{prop.item.company_name}</div>
                                    </div>
                                    <div className='grow h:full m-3 flex  flex mt-4'>
                                              <div className='grow flex-col'>
                                                    <div className='text-lg text-center font-bold w-full'>
                                                  {prop.item.departure_time}
                                                    </div>
                                                    <div className='text-base text-center w-full'>
                                                            {prop.item.departure_location}
                                                    </div>
                                                    {prop.item.departure_date===prop.item.arrival_date ? <div className='text-base text-center w-full text-slate-500 mt-7'> Date : {prop.item.departure_date}</div> : <div className='text-base text-center w-full text-slate-500 mt-7'> Departure : {prop.item.departure_date} - Arrival : {prop.item.arrival_date}</div> }
                                                    
                                              </div>
                                              <div className='flex-none w-1/4 text-center'>
                                                        6H:00
                                              </div>
                                              <div className='grow flex-col'>
                                                    <div className='text-lg text-center font-bold w-full'>
                                                           {prop.item.arrival_time}
                                                    </div>
                                                    <div className='text-base text-center w-full'>
                                                            {prop.item.destination_location}
                                                    </div>
                                              </div>
                                    </div> 
                                    <div className='grow md:flex-none md:w-1/4 h:full m-3 flex flex-col mt-4'>
                                              <div className='w-full text-center text-base'>
                                                    Price: {prop.item.price} Riel
                                              </div>
                                              <div className='w-full text-center text-sm text-red-500'>
                                                    PayBack : 25%
                                              </div>
                                    </div> 
                                    <div className='hidden md:flex md:flex-none h-full w-full md:w-32' >
                                                  <button onClick={()=>{
                                                    setOpen(true)
                                                  }} className='w-full md:w-10/12 justify-center bg-cyan-900 text-base text-white h-10 rounded-md focus:ring-2 focus:ring-blue-300 mt-10 '>Book</button>
                                    </div>
                                    
                                </div>
                                {/* <div className='w-full md:w-10/12 lg:w-2/3 bg-white h-10 flex md:hidden'>
                                   <button className='w-full justify-center bg-cyan-900 text-base text-white h-10 focus:ring-2 focus:ring-blue-300'>Book</button> 
                                </div> */}
                                    
                                {Open?<div className="p-5 w-full h-fit bg-slate-200">
                                          <div className="w-full flex flex-wrap justify-end p-1 pr-3">
                                              <button   onClick={()=>{
                                                    setOpen(false);
                                                }}  type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                              </button>
                                          </div>
                                          <div className='w-full h-fit flex'>
                                                <div className="grow flex flex-wrap justify-center p-2">
                                                {Arr.map((number) =>{
                                                                        var active=false;
                                                                        Seat_number1.map((number1) =>{
                                                                              if(number==number1.seat_number){
                                                                                    active=true;
                  
                                                                              }
                                                                        })
                                                                        if(active){
                                                                              return(<div className='w-10 h-14 bg-cyan-900 m-1 rounded-md text-base text-white text-center'>
                                                                              <div className='w-full h-12 text-base text-white text-center pt-4'> {number}</div>
                                                                              <div className='w-full h-2 bg-orange-500 text-base text-white text-center'></div>
                                                                              </div>)
                                                                        }else{
                                                                              return(<div className='w-10 h-14 bg-cyan-900 m-1 rounded-md text-base text-white text-center'>
                                                                              <div className='w-full h-12 text-base text-white text-center pt-4'> {number}</div>
                                                                              <div className='w-full h-2 bg-green-500 text-base text-white text-center'></div>
                                                                              </div>)
                                                                        }
                                                                  }
                                                                  )}
                                              </div>
                                              <div className="flex-none w-1/2 h-fit px-5 pl-20">
                                                      <label>Seat Number</label>
                                                      <select onChange={e=>{setSeat_number(e.target.value)}} id="underline_select" class="block py-2.5 px-0 w-2/3 text-sm text-gray-500 border-b-2 border-cyan-900 appearance-none px-2 focus:ring-3 focus:ring-blue-300">
                                                            <option selected></option>
                                                            {
                                                                Arr.map((number) =>{
                                                                  var active=false;
                                                                  Seat_number1.map((number1) =>{
                                                                        if(number==number1.seat_number){
                                                                              active=true;
                                                                              console.log("true")
                                                                        }
                                                                  })
                                                                  if(!active){
                                                                        return(<option value={number}>{number}</option>)
                                                                  }
                                                                }
                                                                )
                                                            }

                                                        </select>
                                                        <button onClick={async (e) => {
                                                                        e.preventDefault();
                                                                        if(prop.auth){
                                                                              await axios.post('http://localhost:8000/api/booking',
                                                                                                {
                                                                                                      'route_id':prop.item.id,
                                                                                                      'seat_number':Seat_number,
                                                                                                },{
                                                                                                      withCredentials:true
                                                                                                }).then(function (response) {
                                                                                                      console.log("success")
                                                                                                })
                                                                                          .catch((e) => {
                                                                                                console.log(e);
                                                                                                alert("You Are Not login yet...!")
                                                                                          })
                                                                                          axios.post('http://localhost:8000/api/bookseat',{
                                                                                                      route_id:prop.item.id
                                                                                                },{
                                                                                                      withCredentials: true,
                                                                                                }).then(response => { 
                                                                                                      setSeat_number1(response.data)
                                                                                                      
                                                                                                }).catch((e)=>{
                                                                                                      return e
                                                                                                })
                                                                                          alert("Booking Success")
                                                                        }else{
                                                                                    alert("PLease Login to access")
                                                                        }
                                                                                    
                                                                  }} className='w-2/3 justify-center bg-cyan-900 text-base text-white h-10 rounded-md focus:ring-2 focus:ring-blue-300 mt-10 '>BookNow</button>
                                              </div>
                                          </div>
                                              
                                            </div>:<div></div>}
                                          </div>
      
    )
  }
  export default RouteCard;