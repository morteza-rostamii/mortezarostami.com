import { SecHead } from "@/compos/SecHead"
import helper from "@/utils/helper"
import { AboutCard } from "./AboutCard"

export const About = () => {
  return (
    <section
    className="
    p-4 bg-dark-default py-12
    "
    >
      <SecHead
      text='About '
      highlight={'Me'}
      />

      <div
      className="
      grid gap-4
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      "
      >
        {
          infos?.length
          ?(
            infos.map((el:any) => (
              <AboutCard              
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

const infos = [
  {
    id: helper.getRandomId(),
    heading: 'Who Am I?',
    title: "Expert Frontend Developer",
    description: "Pixel-perfect interfaces are my passion. I deep dive into the world of React and Next.js, crafting user experiences that are both beautiful and blazing fast. But my obsession doesn't stop there -  I'm also exploring React Native to bring those experiences to life on mobile devices.  Let's build something amazing together!"
  },
  {
    id: helper.getRandomId(),
    heading: 'What Else?',
    title: "Backend? I speak that too!",
    description: "While my passion lies in crafting beautiful and intuitive user experiences with React and Next.js, my skillset extends beyond the frontend. I'm well-versed in popular backend technologies like Node.js, Express.js, and MongoDB, allowing me to bridge the gap between data and stunning interfaces."
  },
  {
    id: helper.getRandomId(),
    heading: 'Good To Know!',
    title: "Git fluent, DevOps friendly",
    description: "I leverage Git and Github for seamless collaboration, ensuring code clarity and version control. Familiarity with DevOps principles allows me to integrate my frontend work smoothly into the development lifecycle. Ultimately, this translates to efficient workflows and a focus on delivering exceptional user experiences, all while speaking the developer language."
  },
]