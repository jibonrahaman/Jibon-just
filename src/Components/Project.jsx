import MixiButton from "../Common/MixiButton"
import Navbar from "./Navbar"

function Project() {
  
    return (
        <section className=" max-w-container mx-auto">
            <Navbar />
            <div className=" flex gap-x-7 ">
                <button className="px-4 py-1 rounded-md hover:bg-[#2b4b65] bg-[#0171cd] text-white">ALL</button>

                <MixiButton  text="REACT JS" />
                <MixiButton text="TAILWIND" />
                <MixiButton text="BOOTSTRAP" />
                <MixiButton text="JAVASCRIPT" />
                <MixiButton text="DAYNAMIC" />
            </div>
        </section>
    )
}

export default Project
