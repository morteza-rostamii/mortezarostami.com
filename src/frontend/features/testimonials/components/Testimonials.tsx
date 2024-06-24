'use client'

import { SecHead } from "@/compos/SecHead"
import helper from "@/utils/helper";
import { faker } from "@faker-js/faker";
import { useEffect, useMemo, useState } from "react"
import { TestimonialCard } from "./TestimonialCard";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Button } from "@/components/ui/button";
import { CreateTestimonialModal } from "./CreateTestimonialModal";
import { useSession } from "next-auth/react";
import { API_URL } from "@/app/_libs/config";
import { TestimonialsCarousel } from "./TestimonialsCarousel";
import { useSiteStore } from "@/frontend/stores/store";
import { Loader2 } from "lucide-react";

export const Testimonials = () => {
  const { data: session, status, } = useSession();
  // testimonial modal
  const [isOpen, setIsOpen] = useState(false);

  const {
    fetchTestimonialsAct,
    testimonials,
    loadTestimonials,
  } = useSiteStore();

  const hasTestimonial = useMemo(() => {
    // there is no auth ==: so we can't tell if there is a testimonial
    if (!session?.user?.name) return false;
    if (!testimonials.length) return true;

    return testimonials.some((el:any) => el.username === session?.user?.name);
  }, [testimonials, session]);

  useEffect(() => {
    fetchTestimonialsAct();
  }, []);

  // open testimonials after login
  useEffect(() => {
    if (loadTestimonials) return;
    if (status === 'authenticated' && !hasTestimonial) {
      setIsOpen(true);
    }
  }, [status, hasTestimonial]);

  return (
    <section
    id="testimonials"
    className="
    #grid #place-content-center
    bg-dark-default p-4 py-12
    "
    >
      <SecHead
      text='Kind words from'
      highlight='happy clients'
      />

      <div 
      className="
      #flex flex-col gap-4
      "
      >
        <div className="mx-auto #bg-red-50">
          <TestimonialsCarousel
          data={testimonials}
          load={loadTestimonials}
          />
        </div>

        {
          loadTestimonials || status === 'loading' ?(
            <Loader2 className="mx-auto h-6 w-6 animate-spin" />
          ):(
            hasTestimonial ? '' : <CreateTestimonialModal 
            isOpen={isOpen} 
            setIsOpen={setIsOpen}
            />
          )
        }
      </div>
    </section>
  )
}