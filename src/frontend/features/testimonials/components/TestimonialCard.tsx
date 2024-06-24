import { Skeleton } from "@/components/ui/skeleton"
import helper from "@/utils/helper"
import Image from "next/image"

export const TestimonialCard = ({item, load}:any) => {
  return (
    <>
    {
      !!(load) ?(
        <Skeleton>
          <div
          className="
          flex flex-col gap-4 justify-between #bg-slate-800 h-[250px]
          text-white max-w-[600px] #h-[200px] #h-full p-4 rounded-md
          bg-gradient-to-r from-second-default to-second-100
          border border-slate-500
          "
          >
          </div>
        </Skeleton>
      ):(

        <div
        className="
        flex flex-col gap-4 justify-between #bg-slate-800
        text-white max-w-[600px] #h-[200px] h-full p-4 rounded-md
        bg-gradient-to-r from-second-default to-second-100
        border border-slate-500
        "
        >
          
          <p>
            {helper.truncateText(item?.text, 200)}
          </p>

          <div
          className="
          flex items-center gap-3
          "
          >
            <div>
              <img 
              width={60}
              height={60}
              className="rounded-full"
              src={item?.avatar || 'https://placehold.co/600x400'}
              alt={item?.username || 'f'}
              />
            </div>

            <div>
              <h2
              className="font-bold"
              >
                {item?.username}
              </h2>
              <span className="text-gray-400">
                {item?.occupation}
              </span>
            </div>
          </div>
        </div>
      )
    }
    </>
  )
}
