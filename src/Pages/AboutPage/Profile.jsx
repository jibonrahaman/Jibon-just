import Navbar from "../../Components/Navbar"
import Text from "../../Components/Text"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Profile() {
  return (
    <section >
        <div className=" max-w-container mx-auto" data-aos="fade-up"  data-aos-duration="1000">
          <Navbar/>
          <Text/>
         
        </div>
    </section>
  )
}

export default Profile
