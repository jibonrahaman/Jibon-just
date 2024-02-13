import pp from '../assets/profile.png'
import { RiFacebookFill } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im";
import { CgMail } from "react-icons/cg";
function Text() {
  return (
 
      <section className='px-2 md:pl-0'>
         <div className=" flex gap-x-3 justify-between md:justify-evenly md:mt-16">
         <div className='w-96 '>
         <img src={pp} alt={pp} className="w-full " />
         </div>
          {/* <div></div> */}
          <div className="md:w-[550px] text-[14px] md:text-xl md:flex md:flex-col  md:gap-y-10 ">
            <h2 className="font-bold text-xl  md:text-3xl">Hi, I’m Shahriar Fardous :)</h2>
            <p className="mt-4 md:mt-0 ">I am a multi-disciplinary design and product leader with more than 15 year`s experience creating digital and physical products. A wannabe artist and occasional entrepreneur</p>
            <p className="hidden md:block  ">I have lived and worked in Europe, the US and the Middle East which made me adaptable, accepting and culturally fluid. I thrive in fast-paced, open, transparent and trusting environments. I have over 13 year`s experience managing remote teams. I am an internationally acclaimed photographer and fashion designer in residence. I learn fast. I am ridiculously tall. I absolutely cannot draw.</p>

            <p className="hidden md:block ">These days I’m at WSC Sports, leading the Design organization which includes the Product Design, Visual & Brand Design and Motion Design teams.</p>
            <p className="hidden md:block ">I previously worked at:</p>
            <p className="hidden md:block ">“Meta” Tel Aviv as Design Lead for fintech products.</p>
            <p className="hidden md:block ">“Cheetah” Tel Aviv and San Francisco as Head of Design.</p>
            <p className="hidden md:block ">“Juno”, Tel Aviv where I led the Product Design Team.</p>
            <p className="hidden md:block ">“Enter”, Moscow as Chief Design Officer.</p>
            <p className="hidden md:block ">“Avraham Advertising & Marketing”, Tel Aviv as Senior Art Director.</p>
            <p className="hidden md:block ">Throughout my career I also had a pleasure to contribute to the success of companies such as HP, Audi, Coca Cola, Crowne Plaza, Nat Geo Records, The Rolling Stone Magazine, VW Commercial Vehicles, Sberbank, Pandora, Svyaznoy, Castro, etc.</p>
            </div>
          </div>

          {/* small device */}      
          <div className=' md:hidden text-[12px] mt-3 px-1 flex flex-col gap-y-2'>
            <p> <span className='text-[15px]'>These days</span> I’m at WSC Sports, leading the Design organization which includes the Product Design, Visual & Brand Design and Motion Design teams.</p>
            <p>I previously worked at:</p>
            <p><span className='text-[15px]'>“Meta” Tel</span> Aviv as Design Lead for fintech products.</p>
            <p><span className='text-[15px]'>“Cheetah” Tel</span> Aviv and San Francisco as Head of Design.</p>
            
            <p><span className='text-[15px]'>“Enter”, Moscow</span> as Chief Design Officer.</p>
            <p> <span className='text-[15px]'>“Avraham</span> Advertising & Marketing”, Tel Aviv as Senior Art Director.</p>
            <p><span className='text-[15px]'>Throughout my</span>  career I also had a pleasure to contribute to the success of companies such as HP, Audi, Coca Cola, Crowne Plaza, Nat Geo Records, The Rolling Stone Magazine, VW Commercial Vehicles, Sberbank, Pandora, Svyaznoy, Castro, etc.</p>
          </div>
              {/* small device */}
          <div className='flex gap-x-5 my-5 md:mt-14 md:mb-20 justify-center  text-2xl'>
          <RiFacebookFill />
          <ImLinkedin2 />
          <CgMail className='mt-[1px]' />
         </div>
      </section>
   
  )
}

export default Text
