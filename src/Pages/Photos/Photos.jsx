import Images from '../../Common/Images'
import A from '../../assets/A.jpg'
import B from '../../assets/B.jpg'

export default function Photos() {
  return (
  <section className=" flex justify-center "> 
 <div className=' bg-[#5956ff] justify-evenly w-[80%] ite  flex flex-wrap'>

<Images src={A} alt={A} />
<Images src={B} alt={B} />
<Images src={B} alt={B} />
<Images src={B} alt={B} />
 
 </div> 



  </section>
  )
}
