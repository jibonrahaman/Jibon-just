import Navbar from "./Navbar"

function Project() {
  return (
  <section className=" max-w-container mx-auto">
    <Navbar/>
    <div className=" flex gap-x-7 ">
        <button className="px-4 py-1 rounded-md hover:bg-[#2b4b65] bg-[#0171cd] text-white">ALL</button>
       

        <button>TAILWIND</button>
        <button>BOOTSTRAP</button>
        <button>JAVASCRIPT</button>
        <button>DAYNAMIC</button>
    </div>
  </section>
  )
}

export default Project
