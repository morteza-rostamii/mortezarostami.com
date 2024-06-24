import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { HiOutlineFire } from "react-icons/hi2"
import { useSendEmail } from "../hooks/useSendEmail"
import { Loader2 } from "lucide-react"

export function ContactModal() {
  const {
    formInput,
    errors,
    handInputChange,
    handSubmit,
    isLoading,
  } = useSendEmail();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
        className="scale-anime-05 mx-auto block font-bold"
        variant={'prime'}
        >
          <div className="flex items-center gap-2 justify-between">
            CONTACT ME
            <span>
              <HiOutlineFire size={24}/>
            </span>
          </div>
          </Button>
      </DialogTrigger>
      <DialogContent className="#sm:max-w-[425px]">
        <DialogHeader>
          {/* <DialogTitle
          className="!text-2xl !font-bold "
         
          >
            Please leave me a message!
          </DialogTitle>
          <DialogDescription
          className="text-base font-bold"
          >
            Just click on one of this methods and follow the process.
          </DialogDescription> */}
        </DialogHeader>

        <form 
        className="flex flex-col gap-4"
        onSubmit={handSubmit}
        >
          <div className="flex flex-col gap-1">
            <Label 
            className="flex items-center gap-3 text-base font-medium text-gray-500"
            htmlFor="name">
              Enter your name
              <span 
              className='text-red-500 text-2xl font-bold'
              style={{
                display: !!(errors.name.length) ? 'block' : 'none'
              }}
              >*</span>
            </Label>
            <Input
            id={'name'}
            placeholder="Your name"
            name='name'
            value={formInput.name}
            onChange={handInputChange}
            />
            <div className="text-red-500 mt-2">
              {errors.name.length
              ?(
                errors.name.map((el:any, i:number) => (<span key={i}>{el}</span>))
              ):''
              }
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Label 
            className="flex items-center gap-3 text-base font-medium text-gray-500"
            htmlFor="email">
              Enter your email
              <span 
              className='text-red-500 text-2xl font-bold'
              style={{
                display: !!(errors.email.length) ? 'block' : 'none'
              }}
              >*</span>
            </Label>
            <Input
            id={'email'}
            placeholder="Your email"
            name='email'
            value={formInput.email}
            onChange={handInputChange}
            />
            <div className="text-red-500 mt-2">
              {errors.email.length
              ?(
                errors.email.map((el:any, i:number) => (<span key={i}>{el}</span>))
              ):''
              }
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <Label 
            className="flex items-center gap-3 text-base 
            font-medium text-gray-500"
            htmlFor="message"
            >
              Enter your message
              <span 
              className='text-red-500 text-2xl font-bold'
              style={{
                display: !!(errors.message.length) ? 'block' : 'none'
              }}
              >*</span>
            </Label>
            <Textarea
            id="message"
            placeholder="Your message"
            rows={6}
            name='message'
            onChange={handInputChange}
            />
            <div className="text-red-500 mt-2">
              {errors.message.length
              ?(
                errors.message.map((el:any, i:number) => (<span key={i}>{el}</span>))
              ):''
              }
            </div>
          </div>

          <Button
          className="flex items-center gap-4 font-bold text-xl scale-anime-05"
          variant={'prime'}
          disabled={!!(errors.email.length) || !!(errors.message.length)}
          >
            SEND
            {isLoading ? <Loader2 className="mx-auto h-6 w-6 animate-spin" /> : ''}
          </Button>
        </form>

        <DialogFooter>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}