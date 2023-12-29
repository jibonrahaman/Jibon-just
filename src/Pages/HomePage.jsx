import Navbar from "../Components/Navbar";
import Photography from "../Components/Photography";


export default function HomePage() {
  return (
    <section className="max-w-container mx-auto">
      <Navbar/>
      <p className=" w-[1100px] text-center text-4xl mx-auto mt-14">
        <span className=" font-bold">Hi, I’m Jibon :)  </span>
        I’m a web designer  and web application devloper. I foster innovative teams that create meaningful experiences. Below are some of the projects I worked on lately.
      </p>
      <Photography/>
    </section>
  )
}
