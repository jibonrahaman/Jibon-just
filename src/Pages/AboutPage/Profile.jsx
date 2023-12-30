import Navbar from "../../Components/Navbar"
import pp from '../../assets/profile.png'
function Profile() {
  return (
    <section>
        <div className=" max-w-container mx-auto">
          <Navbar/>
          
          <div className=" flex justify-between mt-16">
          <img src={pp} alt={pp} className=" w-[40%] h-[500px] object-cover mt-10" />
          <div></div>
          <div className="w-[45%]">
            <h2 className=" font-bold text-3xl">Hi, I’m Shahriar Fardous :)</h2>
            <p>I am a multi-disciplinary design and product leader with more than 15 year`s experience creating digital and physical products. A wannabe artist and occasional entrepreneur</p>
            <p>I have lived and worked in Europe, the US and the Middle East which made me adaptable, accepting and culturally fluid. I thrive in fast-paced, open, transparent and trusting environments. I have over 13 year`s experience managing remote teams. I am an internationally acclaimed photographer and fashion designer in residence. I learn fast. I am ridiculously tall. I absolutely cannot draw.</p>

            <p>These days I’m at WSC Sports, leading the Design organization which includes the Product Design, Visual & Brand Design and Motion Design teams.</p>
          </div>
          </div>
        </div>
    </section>
  )
}

export default Profile
