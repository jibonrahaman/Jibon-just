

function Images( {src,alt,className}) {
  return (
 <img src={src} alt={alt} className={`w-[45%] rounded-lg  h-[450px] object-cover ${className}`} />
  )
}

export default Images
