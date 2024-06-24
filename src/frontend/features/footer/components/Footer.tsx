import { Button } from "@/components/ui/button"
import helper from "@/utils/helper"
import { X } from "lucide-react"
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export const Footer = () => {
  return (
    <div
    className="
    grid gap-8 justify-items-center #md:justify-items-stretch
    grid-cols-1
    md:grid-cols-2
    p-4 py-12 bg-dark-default text-white
    "
    >
      <div
      className="md:justify-self-start"
      >
        @ Copyright 2024 Morteza Rostami
      </div>
      <div
      className="
      flex items-center gap-4 md:justify-self-end
      "
      >
        {
          socials?.length
          ?(
            socials.map((el:any) => (
              <Button
              asChild={true}
              size={'icon'}
              className="scale-anime-05"
              variant={'secondary'}
              >
                <a href={el.href} target="_blank">
                {el.icon}
                </a>
              </Button>
            ))
          ):''
        }
      </div>
    </div>
  )
}

const socials = [
  {
    id: helper.getRandomId(),
    name: 'Linkedin',
    href: '#',
    icon: <FaLinkedin size={24}/>
  },
  {
    id: helper.getRandomId(),
    name: 'Github',
    href: '#',
    icon: <FaGithub size={24}/>
  },
  {
    id: helper.getRandomId(),
    name: 'Youtube',
    href: '#',
    icon: <FaYoutube size={24}/>
  },
  {
    id: helper.getRandomId(),
    name: 'X',
    href: '#',
    icon: <FaXTwitter size={24}/>
  },
]
