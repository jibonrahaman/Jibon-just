

function Images( {src,alt,className}) {
  return (
<div className="w-[45%] h-[450px] relative">
<img src={src} alt={alt} className={` rounded-lg w-full bg-black/70 hover:opacity-50 h-full  object-cover ${className}`} />

</div>
 
  )
}

export default Images
