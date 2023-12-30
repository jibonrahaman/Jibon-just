import Navbar from "../../Components/Navbar"
import pp from '../../assets/profile.png'
function Profile() {
  return (
    <section>
        <div className=" max-w-container mx-auto">
          <Navbar/>
          
          <div className=" flex justify-between mt-20">
          <img src={pp} alt={pp} className=" w-[40%] h-[500px] object-cover" />
          <div></div>
          <div className="w-[45%]">
            <h2>Hi, I’m Shahriar Fardous :)</h2>
            <p>I am a multi-disciplinary design and product leader with more than 15 year`s experience creating digital and physical products. A wannabe artist and occasional entrepreneur</p>
          </div>
          </div>
        </div>
    </section>
  )
}

export default Profile
