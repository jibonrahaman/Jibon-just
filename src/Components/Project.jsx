import MixiButton from "../Common/MixiButton"
import Navbar from "./Navbar"
import { useState } from "react"
import skill from "../Skill"
import Btn from "../Common/Project_Common/Btn"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom"
function Project() {
    const [clicked, setClicked] = useState(false);
    const [data,setData]=useState(skill)
    const [filterProtfolio,setFilterProtfolio] = useState(skill)
    const springProps = useSpring({
        transform: clicked ? "scale(1.05)" : "scale(1)",
    });
    const handleSubmit =(text)=>{
        setClicked(!clicked)
        let arr = []
        data.filter((item)=>{
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
            <div className=" flex gap-x-7 px-2">
            
                <button onClick={()=>{setFilterProtfolio(skill)}} className="px-4 py-1 rounded-md hover:bg-[#2b4b65] bg-[#0171cd] text-white" >ALL</button>

                <MixiButton onclick={()=>handleSubmit("REACT JS") }  text="REACT JS" />
                <MixiButton className="hidden md:block" onclick={()=>handleSubmit("TAILWIND")} text="TAILWIND" />
                <MixiButton onclick={()=>handleSubmit("BOOTSTRAP")} text="BOOTSTRAP" />
             <MixiButton onclick={()=>handleSubmit("JAVASCRIPT")} text="JAVASCRIPT" />
                <MixiButton className="hidden md:block" onclick={()=>handleSubmit("DAYNAMIC")} text="DAYNAMIC" />
            </div>

          <div className="mt-10 px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* card design */}
    {filterProtfolio.map((item, id) => {
        return (
         <div key={id}>
               <animated.div
            style={springProps}>
             <div  data-aos="zoom-in"   data-aos-duration="500" className="bg-white mt-8 shadow-lg rounded-lg overflow-hidden h-[480px] ">
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
                    <Link to={item.name == 'chitchat' ? "https://mern-2205-chitchat-chatting-app.vercel.app/" : item.name == 'Orebi' ? "https://orebi-fronted-e-commerce.vercel.app/" : item.name == "Portfolio" ? "https://my-portfolio-shahriar-ferdous.vercel.app/" : item.name == "Omah" ? "https://omah-responsive.vercel.app/" : item.name == "QuiriBox" ? "https://quriarbox-beige.vercel.app/" : item.name == "petroil" ? "https://class-32-tailwind-1st-project.vercel.app/" : item.name == "MixiTup" ? "https://mixitup-simple.vercel.app/" : item.name == "Insta" ? "https://instagram-clone-lemon-two.vercel.app/" : item.name == "Todo" ? "https://todo-javascript-three.vercel.app/" : item.name == "complex" ? "https://todo-class-29.vercel.app/" : item.name == "slider" ? "https://class-26-img-slider.vercel.app/" : item.name == "redux" ? "https://redux-using-reg-login-page.vercel.app/" : item.name == "love" ? "https://rabby-poushi.vercel.app/" : item.name == "finswet" ? "https://finswet-bootsstrap-j49h.vercel.app/" : item.name == "query" ? "https://overview-html-css-xms8.vercel.app/" : item.name == "innovate" ? "https://innovet-react.vercel.app/" : item.name == "demo" ? "https://me-bay-eight.vercel.app/#About": item.name == "toggle" ? "https://faq-topaz.vercel.app/" : item.name == "guessing" ? "https://class-28-guess-game.vercel.app" : item.name == "react" ? "https://toggle-processing.vercel.app/" : item.name == "pet" ? "https://pet-html-x35t.vercel.app/" : item.name == "colour" ?  "https://class-36-react-props.vercel.app/" : item.name == "school" && "https://e-school-iota.vercel.app/"}>
                    <button className="px-3 py-1 bg-blue-400 hover:scale-105 text-white rounded-md hover:bg-blue-600 duration-300 font-semibold ">LIVE</button>
                    </Link>

                    <Link to={item.name == 'chitchat' ? "https://github.com/jibonrahaman/Mern-2205-Chitchat-ChattingApp" : item.name == 'Orebi' ? "https://github.com/jibonrahaman/Orebi-fronted-E-commerce" : item.name == "Portfolio" ? "https://github.com/jibonrahaman/My-Portfolio" : item.name == "Omah" ? "https://github.com/jibonrahaman/omah-responsive" : item.name == "QuiriBox" ? "https://github.com/jibonrahaman/Quriarbox" : item.name == "petroil" ? "https://github.com/jibonrahaman/class-32-tailwind-1st-project" : item.name == "MixiTup" ? "https://github.com/jibonrahaman/mixitup-simple" : item.name == "Insta" ? "https://github.com/jibonrahaman/Instagram-Clone" : item.name == "Todo" ? "https://github.com/jibonrahaman/Todo-Javascript" : item.name == "complex" ? "https://github.com/jibonrahaman/todo-class-29" : item.name == "slider" ? "https://github.com/jibonrahaman/Class-26-img-slider-" : item.name == "redux" ? "https://github.com/jibonrahaman/Redux-using-reg-login-page" : item.name == "love" ? "https://github.com/jibonrahaman/rabby-poushi" : item.name == "finswet" ? "https://github.com/jibonrahaman/Finswet-Bootsstrap" : item.name == "query" ? "https://github.com/jibonrahaman/Quriarbox" : item.name == "innovate" ? "https://github.com/jibonrahaman/innovetReact" : item.name == "demo" ? "https://github.com/jibonrahaman/ME": item.name == "toggle" ? "https://github.com/jibonrahaman/FAQ" : item.name == "guessing" ? "https://github.com/jibonrahaman/Class-28-guess-game-" : item.name == "react" ? "https://github.com/jibonrahaman/Toggle-Processing" : item.name == "pet" ? "https://github.com/jibonrahaman/Pet-html" : item.name == "colour" ?  "https://github.com/jibonrahaman/Class-36-React-Props" : item.name == "school" && "https://github.com/jibonrahaman/E-School"}>
                        <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-400 duration-300 font-semibold hover:scale-105">GITHUB</button>
                                                </Link>
                    </div>
                </div>
            </div>
        </animated.div>
         </div>
           
        );
    })}
    {/* card design */}
</div>
           
                 </section>
    )
}

export default Project
