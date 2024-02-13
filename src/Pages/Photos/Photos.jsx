import Images from '../../Common/Images'
import A from '../../../public/images/A.jpg'
import B from '../../../public/images/B.jpg'
import C from '../../../public/images/C.jpg'
import D from '../../../public/images/D.jpg'
import E from '../../../public/images/E.jpg'
import F from '../../../public/images/F.jpg'
import G from '../../../public/images/G.jpg'
import H from '../../../public/images/H.jpg'
import I from '../../../public/images/I.jpg'
import J from '../../../public/images/J.jpg'
import K from '../../../public/images/K.jpg'
import L from '../../../public/images/L.jpg'
import M from '../../../public/images/M.jpg'
import N from '../../../public/images/N.jpg'
import O from '../../../public/images/O.jpg'
import P from '../../../public/images/P.jpg'
import Q from '../../../public/images/Q.jpg'
import R from '../../../public/images/R.jpg'
import S from '../../../public/images/S.jpg'
import T from '../../../public/images/T.jpg'
import U from '../../../public/images/U.jpg'
import V from '../../../public/images/V.jpg'
import W from '../../../public/images/W.jpg'
import X from '../../../public/images/X.jpg'
import Y from '../../../public/images/Y.jpg'
import Z from '../../../public/images/Z.jpg'
import AA from '../../../public/images/AA.jpg'
import { IoReturnUpBackSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import BackToUp from '@uiw/react-back-to-top';
import { BsRocketFill } from "react-icons/bs";

export default function Photos() {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  const handleBack = () => {
    navigate('/')
  }

  return (
    <section className=" flex md:justify-center  bg-[#474777] ">  
    <div onClick={handleBack}>
        <button  className={`cursor-pointer mt-10 text-2xl ml-3 md:ml-0  md:text-4xl  text-white fixed ${scroll && "px-3  bg-black border mt-14 text-white rounded-md hover:bg-transparent hover:scale-110 duration-500"}`}>
          <IoReturnUpBackSharp />
        </button>
      </div>
      <div className=' relative  ml-5 md:ml-10  justify-evenly  md:w-[60%] mt-20 group   gap-y-10  flex flex-wrap mb-5' >
        <Images src={A} alt={A} />
        <Images src={B} alt={B} />
        <Images src={C} alt={C} />
        <Images src={D} alt={D} />
        <Images src={E} alt={E} />
        <Images src={F} alt={F} />
        <Images src={G} alt={G} />
        <Images src={H} alt={H} />
        <Images src={I} alt={I} />
        <Images src={J} alt={J} />
        <Images src={K} alt={K} />
        <Images src={L} alt={L} />
        <Images src={M} alt={M} />
        <Images src={N} alt={N} />
        <Images src={O} alt={O} />
        <Images src={P} alt={P} />
        <Images src={Q} alt={Q} />
        <Images src={R} alt={R} />
        <Images src={S} alt={S} />
        <Images src={T} alt={T} />
        <Images src={U} alt={U} />
        <Images src={V} alt={V} />
        <Images src={W} alt={W} />
        <Images src={X} alt={X} />
        <Images src={Y} alt={Y} />
        <Images src={Z} alt={Z} />
        <Images src={AA} alt={AA} />
      </div>
   
      <BackToUp >  
       <BsRocketFill className=' text-xl text-cyan-300' />
       </BackToUp>
      
     </section>
  )
}
