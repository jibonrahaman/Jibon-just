import Navbar from "../Components/Navbar";
import Photography from "../Components/Photography";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function HomePage() {
  return (
    <section className="max-w-container mx-auto" data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1000">
      <Navbar />
      <p className=" px-1 md:px-0 text-xl mt-0 md:w-[1100px] text-center md:text-4xl mx-auto md:mt-14">
        <span className=" font-bold">Hi, I’m Jibon :)  </span>
        I’m a web designer  and web application devloper. I foster innovative teams that create meaningful experiences. Below are some of the projects I worked on lately.
      </p>
      <Photography/>
    </section>
  )
}
