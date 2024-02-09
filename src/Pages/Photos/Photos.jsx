import Images from '../../Common/Images'
import A from '../../../public/A.jpg'
import B from '../../../public/B.jpg'
import C from '../../../public/C.jpg'
import D from '../../../public/D.jpg'
import E from '../../../public/E.jpg'
import F from '../../../public/F.jpg'
import G from '../../../public/G.jpg'
import H from '../../../public/H.jpg'
import I from '../../../public/I.jpg'
import J from '../../../public/J.jpg'
import K from '../../../public/K.jpg'
import L from '../../../public/L.jpg'
import M from '../../../public/M.jpg'
import N from '../../../public/N.jpg'
import O from '../../../public/O.jpg'
import P from '../../../public/P.jpg'
import Q from '../../../public/Q.jpg'
import R from '../../../public/R.jpg'
import S from '../../../public/S.jpg'
import T from '../../../public/T.jpg'
import U from '../../../public/U.jpg'
import V from '../../../public/V.jpg'
import W from '../../../public/W.jpg'
import X from '../../../public/X.jpg'
import Y from '../../../public/Y.jpg'
import Z from '../../../public/Z.jpg'
import AA from '../../../public/AA.jpg'
import { IoReturnUpBackSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'


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
    <section className=" flex justify-center bg-[#474777] ">
      <div>
        <button onClick={handleBack} className={` mt-3 text-4xl  text-white fixed ${scroll && "px-3  bg-black border mt-8 text-white rounded-md hover:bg-transparent hover:scale-110 duration-500"}`}>
          <IoReturnUpBackSharp />
        </button>
      </div>
      <div className=' relative ml-10  justify-evenly w-[80%] mt-20 group   gap-y-10  flex flex-wrap' >
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
    </section>
  )
}
