import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import helper from "@/utils/helper"
import { useMemo } from "react"
import { BiLogoTypescript } from "react-icons/bi"
import { FaCss3Alt, FaReact } from "react-icons/fa"
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri"
import { SiReactos, SiRedux } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

export const TechScroll = () => {
  const items = useMemo(() => {
    const elements = techs.map((el:any) => ({
      quote: '',
      name: '',
      title: '',
      Card: <Tech key={helper.getRandomId()} item={el}/>
    })) 
    return elements;
  }, []);

  const texts = useMemo(() => {
    return quotes.map((el:any) => ({
      quote: '',
      name: '',
      title: '',
      Card: <BigCard key={helper.getRandomId()} item={el}/>
    }))
  }, []);

  return (
    <section 
    className="grid place-content-center bg-dark-default text-white h-[30vh] p-4 w-full"
    >
      <div className="mx-auto #bg-red-100 grid place-content-center">
        <InfiniteMovingCards
        className="w-full"
        items={items || []}
        speed="slow"
        />
        <InfiniteMovingCards
        items={texts || []}
        speed="slow"
        direction="right"
        />
      </div>
    </section>
  )
}

const BigCard = ({item}:any) => {
  return(
    <div 
    className="
    w-[full] text-2xl
    "
    >
      {item.text}
    </div>
  )
}

const quotes = [
  {
    text: 'Crafting beautiful and functional UIs with React & Next.js.',
  },
  {
    text: 'Building responsive and performant web experiences.',
  },
  {
    text: 'Turning ideas into intuitive interfaces.',
  },
];

const Tech = ({item}:any) => {
  const Icon = item.icon;

  return (
    <div className="
    flex items-center gap-4 p-4 py-2 bg-slate-600 border-slate-300 border
    #card-1 text-slate-800 rounded-[9999px] #p-2 bg-opacity-60">
      <span className="font-bold text-white">
        {item.name}
      </span>
      <span className="text-violet-300">
      <Icon size={40}/>  
      </span>
    </div>
  )
}

const techs = [
  
  {
    id: helper.getRandomId(),
    name: 'Next.js',
    icon: TbBrandNextjs,
  },
  {
    id: helper.getRandomId(),
    name: 'Javascript',
    icon: RiJavascriptFill,
  },
  {
    id: helper.getRandomId(),
    name: 'React.js',
    icon: SiReactos,
  },
  {
    id: helper.getRandomId(),
    name: 'Css',
    icon: FaCss3Alt,
  },
  {
    id: helper.getRandomId(),
    name: 'TailwindCss',
    icon: RiTailwindCssFill,
  },
  {
    id: helper.getRandomId(),
    name: 'Redux',
    icon: SiRedux,
  },
  
  {
    id: helper.getRandomId(),
    name: 'Typescript',
    icon: BiLogoTypescript,
  },
]