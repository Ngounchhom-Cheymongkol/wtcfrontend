import Router, {useRouter} from "next/router";
import { useEffect,useState } from "react";
import NavBar from "../components/NavBar";
import RouteCard from "../components/RouteCard";
import SearchBar from "../components/SearchBar";
import axios from "axios";
const CompanyDetail=()=>{
    const [Company,setCompany]=useState();
    const [Routelist,setRoutelist]=useState([]);
  //setProvince(ProvinceData);
  //const [RouteList,setRouteList]=useState([]);

  const [auth, setAuth] =  useState(false);
        const router=useRouter();
        const data=router.query;
        
          useEffect(async ()=>{
            axios.get('http://localhost:8000/api/user',{
            withCredentials: true,
    
          }).then(response => { 
            setAuth(true)
            console.log(response.data.full_name)
          }).catch((e)=>{
                  console.log("Not login")
                    setAuth(false);
          })
          await axios.get('http://localhost:8000/api/getprovince/'+data.id,).then(response => { 
            setCompany(response.data) 
          }).catch((e)=>{
                  return e
          }) 
          
          },[])
          const logout = async () => {
            await fetch('http://localhost:8000/api/logout', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
            })
            setAuth(false);
            await router.push('/');
          }
        return(<>
        
        <NavBar className="relative" auth={auth}  activevalue={0} logout={logout}></NavBar>
              <div className="w-full px-0 md:px-32 pt-10 bg-slate-200">
                <div className="w-full flex flex-wrap justify-center"><SearchBar></SearchBar></div>
                <div className="flex grid-col-2 justify-between w-full mt-10">
                        <div>
                           <div className="w-9 h-1 bg-cyan-900 mb-5"></div>
                            <h1 className="text-cyan-900 text-xl font-bold	">Company</h1>
                        </div>
                       
                </div>
                <div>
                    <img src=""></img>
                </div>
               <div className="mt-10 flex flex-wrap justify-center">
                      {/* {
                              // display All Route 
                              Routelist.map((item)=>{
                                return (
                                  <RouteCard item={item}></RouteCard>   
                                )
                              })
                            } */}
               </div>
              </div>

        </>)
}
export default CompanyDetail;