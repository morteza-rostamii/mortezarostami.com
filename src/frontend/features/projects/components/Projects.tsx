"use client"

import { SecHead } from "@/compos/SecHead"
import { useEffect, useState } from "react"
import helper from "@/utils/helper"
import { faker } from "@faker-js/faker"
import { ProjCard } from "./ProjCard"

export const Projects = () => {

  const [projects, setProjects] = useState<any>([]);

  useEffect(() => {
    const items = Array.from({length: 4}).map(() => {
      return {
        id: helper.getRandomId(),
        title: faker.lorem.words(4),
        description: faker.lorem.words(14),
        image: 'https://placehold.co/600x400',
        githubLink: '#',
        projectLink: '#',
      }
    })
    setProjects(items);
  }, []);

  return (
    <section
    id="projects"
    className="
    bg-dark-default p-4 py-12
    "
    >
      <SecHead
      text={'A small selection of my'}
      highlight={'best projects'}
      />
      
      <div
      className="
      py-4 grid gap-8 max-w-[1200px] mx-auto
      #grid-temp-auto
      grid-cols-1
      md:grid-cols-2
      "
      >
        {
          projects?.length
          ?(
            projects.map((el:any) => (
              <ProjCard 
              key={el.id}
              item={el}
              />
            ))
          ):''
        }
      </div>
    </section>
  )
}