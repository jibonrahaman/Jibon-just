import Images from '../../Common/Images'
import A from '../../assets/A.jpg'
import B from '../../assets/B.jpg'
import C from '../../assets/C.jpg'
import D from '../../assets/D.jpg'
import E from '../../assets/E.jpg'
import F from '../../assets/F.jpg'
import G from '../../assets/G.jpg'
import H from '../../assets/H.jpg'
import I from '../../assets/I.jpg'
import J from '../../assets/J.jpg'




export default function Photos() {
  return (
  <section className=" flex justify-center "> 
 <div className=' bg-[#5956ff] justify-evenly w-[80%] ite  flex flex-wrap'>

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




 
 </div> 



  </section>
  )
}
