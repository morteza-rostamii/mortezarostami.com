"use client"
import { DotBackground } from "@/compos/DotBackground"
import { SecHead } from "@/compos/SecHead"
import { ContactModal } from "./ContactModal"

export const Contact = () => {

  return (
    <div
    className="
    bg-dark-default p-4 py-12
    "
    >
      <DotBackground>
        <div
        className="flex flex-col gap-4"
        >
          <SecHead
          text="Let's craft game-changing apps that boost "
          highlight={'your business.'}
          />
          <p
          className="
          text-gray-300 text-lg text-center
          "
          >
          Results-focused and ready to collaborate! Let's talk today about how I can help you achieve your goals.
          </p>

          <ContactModal/>
        </div>
      </DotBackground>
    </div>
  )
}
