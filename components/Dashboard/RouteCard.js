import {useState} from 'react'
const RouteCard=()=>{
    const [RColor,setRColor]=useState("bg-gradient-to-r from-pink-400 to-pink-500");
    const [Color,setColor]=useState("w-64 h-44 bg-gradient-to-r from-pink-400 to-pink-500 rounded-md flex flex-col p-4 m-3  focus:ring-4 focus:ring-blue-300");
    console.log(Color)
    var randomnumber = Math.ceil((Math.floor(Math.random() * (7 - 1 + 1)) + 1));
    switch (randomnumber) {
        case 1:
            setColor("w-64 h-44 bg-gradient-to-r from-purple-400 to-purple-500 rounded-md flex flex-col p-4 m-3  focus:ring-4 focus:ring-blue-300");
            break;
        case 2:
            setColor("w-64 h-44 bg-gradient-to-r from-red-400 to-red-500 rounded-md flex flex-col p-4 m-3  focus:ring-4 focus:ring-blue-300");
            break;
        case 3:
            setColor("w-64 h-44 bg-gradient-to-r from-green-400 to-green-500 rounded-md flex flex-col p-4 m-3  focus:ring-4 focus:ring-blue-300");
            break;
        case 4:
            setColor("w-64 h-44 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-md flex flex-col p-4 m-3  focus:ring-4 focus:ring-blue-300");
            break;
        case 5:
            setColor("w-64 h-44 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-md flex flex-col p-4 m-3  focus:ring-4 focus:ring-blue-300");
            break;
        
    }
    return(
        <button className={Color}> 
            <div className="w-full flex flex-wrap justify-between focus:ring-4 focus:ring-blue-300">
                <div className="text-sm font-bold text-white">PP</div>
                <div className="text-sm font-bold text-slate-300">to</div>
                <div className="text-sm font-bold text-white">BTB</div>
            </div>
            <div className="w-full flex flex-wrap justify-between">
                <div className="text-sm font-bold text-white">7:00AM</div>
                <div className="text-sm font-bold text-slate-300"></div>
                <div className="text-sm font-bold text-white">3:00PM</div>
            </div>
            <div className="w-full mt-10 flex flex-col justify-center">
                <div className="text-lg font-bold text-white">Booking : 5</div>
                <div className="text-sm font-bold text-slate-300">30.6%</div>
            </div>
        </button>
    )
}
export default RouteCard;