import MixiButton from "../Common/MixiButton"
import Navbar from "./Navbar"
import p1 from '../../public/images/p1.png'
import { useState } from "react"
import skill from "../Skill"

function Project() {
    const [data,setData]=useState(skill)
    const [filterProtfolio,setFilterProtfolio] = useState(skill)

    const handleSubmit =(text)=>{
        let arr = []
        const filt = data.filter((item)=>{
         item.title.filter((item2)=>{
            if(item2 == text){
              arr.push(item)
            }
         })
         
        })
       setFilterProtfolio(arr)        
    }
  
    return (
        <section className=" max-w-container mx-auto">
            <Navbar />
            <div className=" flex gap-x-7 ">
                <button onClick={()=>{setFilterProtfolio(skill)}} className="px-4 py-1 rounded-md hover:bg-[#2b4b65] bg-[#0171cd] text-white" >ALL</button>

                <MixiButton onclick={()=>handleSubmit("REACT JS")}  text="REACT JS" />
                <MixiButton onclick={()=>handleSubmit("TAILWIND")} text="TAILWIND" />
                <MixiButton onclick={()=>handleSubmit("BOOTSTRAP")} text="BOOTSTRAP" />
             <MixiButton onclick={()=>handleSubmit("JAVASCRIPT")} text="JAVASCRIPT" />
                <MixiButton onclick={()=>handleSubmit("DAYNAMIC")} text="DAYNAMIC" />
            </div>

            <div className=" mt-5    grid grid-cols-3 gap-x-8 ">
       {/* card design */}
 
            {
                filterProtfolio.map((item,id)=>{
                   return <div key={id} className=" overflow-hidden px-4">
                    <img src={item.imgs} alt="" className=" hover:scale-110 duration-500"/>
                <div className=" bg-[#d9eeff] p-3 ">
               <h2 className=" text-xl font-semibold">{item.webName}</h2> 
               <p className=" mt-3">{item.paragraph}</p> 
               <p className=" items-center mt-3">Technology:
                <button className="px-3  cursor-pointer bg-white text-black ml-3 rounded-md">{item.html}</button> 
                <button className="px-3  cursor-pointer bg-white text-black ml-3 rounded-md">{item.css}</button> 
                <button className="px-3  cursor-pointer bg-white text-black ml-3 rounded-md">{item.js}</button> 
                <button className="px-3  cursor-pointer bg-white text-black ml-3 rounded-md">{item.react}</button>
                <button className="px-3 mt-2  cursor-pointer bg-white text-black ml-3 rounded-md">{item.tailwind}</button>
                </p>  
                <div className=" flex gap-x-7 mt-6 mb-5"> 
                <button className=" px-3 py-1 bg-[#0171cd] rounded-md text-white border border-[#0171cd] hover:bg-transparent duration-300 hover:text-[#0171cd] font-semibold">LIVE
                </button>
                <button className=" px-3 py-1  hover:bg-[#0171cd] rounded-md hover:text-white border border-[#0171cd] bg-transparent duration-300 text-[#0171cd]  font-semibold">GITHUB
                </button>
             </div>   
               </div>
                  </div>
                })
            }
    {/* card design */}
           </div>             
                 </section>
    )
}

export default Project
