import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Images( {src,alt,className}) {
  return (
<div className="md:w-[45%] md:h-[400px] w-[300px] h-[250px]  relative" data-aos="zoom-in-up" >
<img src={src} alt={alt} className={` rounded-lg w-full bg-black/70 hover:opacity-50 h-full  object-cover ${className}`} />

</div>
 
  )
}

export default Images
