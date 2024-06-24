"use client"

import { Navigation } from "./Navigation"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { FlipWords } from "@/components/ui/flip-words"
import { Button } from "@/components/ui/moving-border"

export const Hero = () => {
  return (
    <section 
    className="
    relative 
    flex flex-col items-center justify-center gap-4
    h-[30rem] 
    md:h-[40rem]
    w-full 
    rounded-md 
    bg-dark-default
    antialiased #border-b-2
    ">
      <Navigation/>
      
      <h2 className="text-white text-center">
        DYNAMIC WEB EXPERIENCE WITH NEXT.JS
      </h2>
      <h1 
      className="
      relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500  text-center #font-sans font-bold max-w-[400px] md:max-w-[700px] !m-0
      ">
        Full Stack Developer 
        <div className="text-violet-400">
          <FlipWords 
          words={['React.js', 'Next.js', 'React.Native']}
          className="text-violet-400"
          />
        </div>
      </h1>
      <p className="text-neutral-400 #max-w-lg mx-auto my-2 md:text-lg text-center relative z-10 max-w-[400px]">
      Obsessed with crafting beautiful, blazing-fast user experiences.  React & Next.js enthusiast. 
      </p>
      <Button
      className="group z-10 font-bold tracking-wide"
      >
        <span className="group-hover:scale-105 transition-all">
        SEE MY PROJECTS!
        </span>
      </Button>
      <BackgroundBeams />
    </section>
  )
}
