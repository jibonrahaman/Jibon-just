
function Photography() {
  const handleClick =()=>{
    console.log("data");
  }
  return (
   <section className=" pb-20">
    <div onClick={handleClick} className=" flex  justify-center mt-20">
       <div className=" h-[350px] relative group ">
       <img src="https://images.squarespace-cdn.com/content/v1/5b5617b9697a9878c6351a85/1604434623934-V4M6DMF2VV5627U4RR9D/Pavel_Bolo_Photography.jpg?format=1000w" alt="" className=" h-full" /> 
       <p className="group-hover:bg-[#7a78ff] opacity-45 group-hover:w-full group-hover:h-full absolute top-0 left-0"></p>
       <p className=" absolute top-14 left-44 text-white text-3xl group-hover:scale-125">Photography</p>
       </div>
       <div className=" h-[350px] relative group">
       <img src="https://images.squarespace-cdn.com/content/v1/5b5617b9697a9878c6351a85/1604434544631-T821ET958H8RNV5ROWO0/Cheetah.jpg?format=1000w" alt="" className=" h-full"  />
       <p className="group-hover:bg-[#ffb233] opacity-45 group-hover:w-full group-hover:h-full absolute top-0 left-0"></p>
       <p className=" absolute top-14 left-44 text-white text-3xl group-hover:scale-125">Our Click</p>
       </div>
    </div>
   </section>
  )
}

export default Photography
