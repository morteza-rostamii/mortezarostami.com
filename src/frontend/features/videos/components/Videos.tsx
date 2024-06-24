"use client"
import { SecHead } from "@/compos/SecHead"
import helper from "@/utils/helper"
import { VideoCard } from "./VideoCard"

export const Videos = () => {
  return (
    <div
    className="
    p-4 py-12 bg-dark-default
    "
    >
      <SecHead
      text={'My Last'}
      highlight={'Videos'}
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
          videos?.length
          ?(
            videos.map((el:any) => (
              <VideoCard 
              key={el.id}
              item={el}
              />
            ))
          ):''
        }
      </div>
    </div>
  )
}

const videos = [
  {
    id: helper.getRandomId(),
    title: '---',
    description: '=========',
    videoId: 'OPxVgy2JT1Q',
  },
  {
    id: helper.getRandomId(),
    title: '---',
    description: '=========',
    videoId: 'OPxVgy2JT1Q',
  },
  {
    id: helper.getRandomId(),
    title: '---',
    description: '=========',
    videoId: 'OPxVgy2JT1Q',
  },
  {
    id: helper.getRandomId(),
    title: '---',
    description: '=========',
    videoId: 'OPxVgy2JT1Q',
  },
]