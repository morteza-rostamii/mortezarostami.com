import { About } from "../features/about"
import { Contact } from "../features/contact"
import { Footer } from "../features/footer"
import { Hero } from "../features/hero"
import { Projects } from "../features/projects"
import { TechScroll } from "../features/techs"
import { Testimonials } from "../features/testimonials"
import { Videos } from "../features/videos"

export const HomePage = () => {
  return (
    <div
    className="
    h-full bg-black-100 #overflow-hidden 
    "
    >
      <Hero/>
      {/* <div className="h-[2px] w-[full] bg-white"></div> */}
      <TechScroll/>
      {/* <div className="h-[2px] w-[full] bg-white"></div> */}
      <Projects/>
      {/* <div className="h-[2px] w-[full] bg-white"></div> */}
      <Testimonials/>
      {/* <div className="h-[2px] w-[full] bg-white"></div> */}
      <About/>
      {/* <div className="h-[2px] w-[full] bg-white"></div> */}
      <Videos/>
      {/* <div className="h-[2px] w-[full] bg-white"></div> */}
      <Contact/>
      {/* <div className="h-[2px] w-[full] bg-white"></div> */}
      <Footer/>
    </div>
  )
}
