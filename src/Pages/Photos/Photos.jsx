import A from '../../assets/A.jpg'

export default function Photos() {
  return (
  <section className=" max-w-container mx-auto"> 
  <div className=" items-center bg-[#5956ff] px-4 flex  flex-wrap gap-x-3">
     <img src={A} alt={A} />
  </div>
  </section>
  )
}
