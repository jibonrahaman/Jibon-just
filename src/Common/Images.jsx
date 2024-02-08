

function Images( {src,alt,className}) {
  return (
 <img src={src} alt={alt} className={`w-[45%] h-[450px] object-cover ${className}`} />
  )
}

export default Images
