import MixiButton from "../Common/MixiButton"
import Navbar from "./Navbar"
import p1 from '../../public/images/p1.png'
// import { useState } from "react"
// import skill from "../Skill"

function Project() {
    // const [data,setData]=useState(skill)
    // const filt = data.filter

    const handleSubmit =(text)=>{
        console.log(text);
    }
  
    return (
        <section className=" max-w-container mx-auto">
            <Navbar />
            <div className=" flex gap-x-7 ">
                <button className="px-4 py-1 rounded-md hover:bg-[#2b4b65] bg-[#0171cd] text-white">ALL</button>

                <MixiButton onclick={()=>handleSubmit("REACT JS")}  text="REACT JS" />
                <MixiButton onclick={()=>handleSubmit("TAILWIND")} text="TAILWIND" />
                <MixiButton onclick={()=>handleSubmit("BOOTSTRAP")} text="BOOTSTRAP" />
             <MixiButton onclick={()=>handleSubmit("JAVASCRIPT")} text="JAVASCRIPT" />
                <MixiButton onclick={()=>handleSubmit("DAYNAMIC")} text="DAYNAMIC" />
            </div>

            <div className=" mt-5    grid grid-cols-3 gap-x-8 ">
       {/* card design */}
 
            <div className="">
                <img src={p1} alt="" />
            <div className=" bg-[#d9eeff] p-3 ">
           <h2 className=" text-xl font-semibold"></h2> 
           <p className=" mt-3"></p> 
           <p className=" items-center mt-3">Technology:
            <button className="px-3  cursor-pointer bg-white text-black ml-3 rounded-md">
            </button> 
            <button className="px-3  cursor-pointer bg-white text-black ml-3 rounded-md">
            </button> 
            <button className="px-3  cursor-pointer bg-white text-black ml-3 rounded-md">
            </button>
            </p>  
            <div className=" flex gap-x-7 mt-6"> 
            <button className=" px-3 py-1 bg-[#0171cd] rounded-md text-white border border-[#0171cd] hover:bg-transparent duration-300 hover:text-[#0171cd] font-semibold">LIVE
            </button>
            <button className=" px-3 py-1 hover:bg-[#0171cd] rounded-md hover:text-white border border-[#0171cd] bg-transparent duration-300 text-[#0171cd]  font-semibold">GITHUB
            </button>
         </div>   
           </div>
              </div>
    {/* card design */}
           </div>             
                 </section>
    )
}

export default Project
