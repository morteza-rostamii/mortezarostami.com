"use client"

import { Button as ShadcnBtn } from "@/components/ui/button";
import { Button } from "@/components/ui/moving-border";
import helper from "@/utils/helper"
import { useEffect, useState } from "react"

export const Navigation = () => {
  const [links, setLinks] = useState<any[]>([]);

  useEffect(() => {
    const links = [
      {
        id: helper.getRandomId(),
        name: 'About',
        href: '#about',
      },
      {
        id: helper.getRandomId(),
        name: 'Projects',
        href: '#projects',
      },
      {
        id: helper.getRandomId(),
        name: 'Videos',
        href: '#videos',
      },
      {
        id: helper.getRandomId(),
        name: 'Contact',
        href: '#contact',
      },
    ];
    setLinks(links);
  }, []);

  return (
    <header
    className="
    bg-slate-100 bg-opacity-30
    flex items-center gap-6 flex-wrap
    #bg-slate-500 text-white z-10 p-2 rounded-[9999px] border-slate-500 
    border shadow-lg min-w-[400px] min-h-[40px]
    "
    >
      {
        links.length
        ?(
          links.map((el:any) => (
            <NavItem
            key={el.id}
            item={el}
            />
          ))
        ):''
      }
    </header>
  )
}

const NavItem = ({item}:any) => {
  return (
    <a
    className="hover:underline "
    href={item.href}
    >
      <ShadcnBtn
      className="text-white hover:scale-110 transition-all text-lg md:text-xl"
      variant={'link'}
      >
      {item.name}
      </ShadcnBtn>
    </a>
  )
}