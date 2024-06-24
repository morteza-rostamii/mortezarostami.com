import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import GoogleLoginBtn from "@/compos/GoogleLoginBtn"

export function CreateTestimonialModal({
  isOpen, 
  setIsOpen, 
  }:any) {

  return (
    <Dialog
    open={isOpen}
    onOpenChange={setIsOpen}
    >
      <DialogTrigger 
      //onClick={() => onOpe}
      asChild>
        <Button
        className="
        block mt-4
        scale-anime-05 self-center w-fit font-bold mx-auto
        "
        variant={'prime'}
        >
          LEAVE A TESTIMONIAL
        </Button>
      </DialogTrigger>
      <DialogContent className="#sm:max-w-[425px] rounded-md">
        <DialogHeader>
          {/* <DialogTitle
          className="!text-2xl !font-bold "
         
          >
            Testimonial!
          </DialogTitle> */}
          {/* <DialogDescription
          className="text-base font-bold"
          >
            Just click on one of this methods and follow the process.
          </DialogDescription> */}
        </DialogHeader>
          <GoogleLoginBtn />
        <DialogFooter>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}