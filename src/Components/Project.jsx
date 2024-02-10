import Navbar from "./Navbar"

function Project() {
  return (
  <section className=" max-w-container mx-auto">
    <Navbar/>
    <div className=" flex gap-x-9">
        <button>ALL</button>
        <button>REACT JS</button>
        <button>TAILWIND</button>
        <button>BOOTSTRAP</button>
        <button>JAVASCRIPT</button>
        <button>DAYNAMIC</button>
    </div>
  </section>
  )
}

export default Project
