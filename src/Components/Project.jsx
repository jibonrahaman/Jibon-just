import MixiButton from "../Common/MixiButton"
import Navbar from "./Navbar"
import p1 from '../../public/images/p1.png'
import { useState } from "react"
import skill from "../Skill"
import Btn from "../Common/Project_Common/Btn"

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
            <div key={id} className="bg-white shadow-lg rounded-lg overflow-hidden h-[450px]">
                <img src={item.imgs} alt={item.webName}className="w-full h-[170px] hover:scale-105 duration-500 object-cover object-center" />
                <div className="p-6 bg-[#d9eeff] h-full">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.webName}</h2>
           <p className="text-gray-600 mb-4">{item.paragraph}</p>
                    <div className=" mb-3 flex flex-wrap gap-y-2">Technology :
             {item.html &&   <Btn text={item.html}/>}
             {item.css &&   <Btn text={item.css}/>}
             {item.js &&   <Btn text={item.js}/>}
             {item.react &&   <Btn text={item.react}/>}
             {item.tailwind &&   <Btn text={item.tailwind}/>}
             {item.redux &&   <Btn text={item.redux}/>}
                </div>  
                    <div className="flex justify-center gap-x-6">
                        <button className="px-3 py-1 bg-blue-400 hover:scale-105 text-white rounded-md hover:bg-blue-600 duration-300 font-semibold ">LIVE</button>
                        <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-400 duration-300 font-semibold hover:scale-105">GITHUB</button>
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
