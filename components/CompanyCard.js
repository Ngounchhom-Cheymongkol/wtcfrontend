import {useRouter} from "next/router";

const CompanyCard=(prop)=>{
    const router= useRouter();
    return(
        <div onClick={(e)=>{
            e.preventDefault();
            router.push('/companydetail?id='+prop.item.id)
        }} class="m-3 h-fit max-w-sm rounded overflow-hidden shadow-lg hover:shadow-lg hover:shadow-blue-300 focus:ring-4 focus:ring-blue-300">
            <img class="w-full" src={prop.item.image} alt="Sunset in the mountains"/>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{prop.item.company_name}</div>
                <p class="text-gray-700 text-base">
                {prop.item.Decription}
                </p>
            </div>
            <div class="px-6 pt-4 pb-3 ">
                {/* <button className="w-2/3 h-14 bg-cyan-900 text-white hover:shadow-md hover:shadow-cyan-500 rounded-lg">
                    Detail
                </button> */}
                {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
            </div>
            </div>
    )
}
export default CompanyCard;