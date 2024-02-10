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

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* card design */}
    {filterProtfolio.map((item, id) => {
        return (
            <div key={id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={item.imgs} alt={item.webName} className="w-full h-40 hover:scale-105 duration-500 object-cover object-center" />
                <div className="p-6 bg-[#d9eeff]">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.webName}</h2>
                    <p className="text-gray-600 mb-4">{item.paragraph}</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-3 mb-4">
                        <button className="px-3 py-1 bg-white text-black rounded-md">{item.html}</button>
                        <button className="px-3 py-1 bg-white text-black rounded-md">{item.css}</button>
                        <button className="px-3 py-1 bg-white text-black rounded-md">{item.js}</button>
                        <button className="px-3 py-1 bg-white text-black rounded-md">{item.react}</button>
                        <button className="px-3 py-1 bg-white text-black rounded-md">{item.tailwind}</button>
                    </div>
                    <div className="flex gap-x-3">
                        <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 duration-300 font-semibold">LIVE</button>
                        <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 duration-300 font-semibold">GITHUB</button>
                    </div>
                </div>
            </div>
        );
    })}
    {/* card design */}
</div>
           
                 </section>
    )
}

export default Project
