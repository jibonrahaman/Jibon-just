import pp from '../assets/profile.png'
import { RiFacebookFill } from "react-icons/ri";

function Text() {
  return (
 
      <section>
         <div className=" flex justify-between mt-16">
          <img src={pp} alt={pp} className=" w-[40%] h-[500px] object-cover mt-10" />
          <div></div>
          <div className="w-[45%] ">
            <div className=" w-[550px] text-xl flex flex-col  gap-y-10 ">
            <h2 className=" font-bold text-3xl">Hi, I’m Shahriar Fardous :)</h2>
            <p className=" ">I am a multi-disciplinary design and product leader with more than 15 year`s experience creating digital and physical products. A wannabe artist and occasional entrepreneur</p>
            <p>I have lived and worked in Europe, the US and the Middle East which made me adaptable, accepting and culturally fluid. I thrive in fast-paced, open, transparent and trusting environments. I have over 13 year`s experience managing remote teams. I am an internationally acclaimed photographer and fashion designer in residence. I learn fast. I am ridiculously tall. I absolutely cannot draw.</p>

            <p>These days I’m at WSC Sports, leading the Design organization which includes the Product Design, Visual & Brand Design and Motion Design teams.</p>
            <p>I previously worked at:</p>
            <p>“Meta” Tel Aviv as Design Lead for fintech products.</p>
            <p>“Cheetah” Tel Aviv and San Francisco as Head of Design.</p>
            <p>“Juno”, Tel Aviv where I led the Product Design Team.</p>
            <p>“Enter”, Moscow as Chief Design Officer.</p>
            <p>“Avraham Advertising & Marketing”, Tel Aviv as Senior Art Director.</p>
            <p>Throughout my career I also had a pleasure to contribute to the success of companies such as HP, Audi, Coca Cola, Crowne Plaza, Nat Geo Records, The Rolling Stone Magazine, VW Commercial Vehicles, Sberbank, Pandora, Svyaznoy, Castro, etc.</p>
            </div>
          </div>
          </div>
          <div className='flex gap-x-8'>
          <RiFacebookFill />

          </div>
      </section>
   
  )
}

export default Text
