import { Link, useNavigate } from "react-router-dom"

function Photography() {
  const navigate = useNavigate();
  const handleClick =()=>{
   navigate("/photos")
  }
  return (
   <section className=" mt-14 md:pb-20 px-1  ">
    <div  className=" flex  justify-center mt-10 md:mt-20 ">
       <div onClick={handleClick} className="h-[200px] md:h-[350px] relative group ">
       <img src="https://images.squarespace-cdn.com/content/v1/5b5617b9697a9878c6351a85/1604434623934-V4M6DMF2VV5627U4RR9D/Pavel_Bolo_Photography.jpg?format=1000w" alt="" className=" h-full object-cover " /> 
       <p className="group-hover:bg-[#7a78ff] opacity-45 group-hover:w-full group-hover:h-full absolute top-0 left-0"></p>
       <p className=" absolute top-8 left-[45px] md:top-14 md:left-[195px] text-white md:text-3xl group-hover:scale-125">Photography</p>
       </div>
    <Link to='/project'>
    <div className=" h-[200px] md:h-[350px] relative group">
       <img src="https://images.squarespace-cdn.com/content/v1/5b5617b9697a9878c6351a85/1604434544631-T821ET958H8RNV5ROWO0/Cheetah.jpg?format=1000w" alt="" className=" h-full object-cover"  />
       <p className="group-hover:bg-[#ffb233] opacity-45 group-hover:w-full group-hover:h-full absolute top-0 left-0"></p>
       <p className=" absolute top-8 left-[45px] md:top-14 md:left-[195px] text-white md:text-3xl group-hover:scale-125">My Project</p>
       </div>
    </Link>
    </div>
   </section>
  )
}

export default Photography
