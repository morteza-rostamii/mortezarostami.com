import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { TestimonialCard } from "./TestimonialCard"

export function TestimonialsCarousel({
  data,
  load
}:any) {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full #max-w-sm"
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        
        {
          data?.length
          ?(
            data.map((el:any) => (
              <CarouselItem 
              key={el.id} 
              className="md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard
                key={el.id}
                item={el}
                load={load}
                />
              </CarouselItem>
            ))
          ):''
        }
      </CarouselContent>
      <CarouselPrevious className="ml-14"/>
      <CarouselNext className="mr-14"/>
    </Carousel>
  )
}
