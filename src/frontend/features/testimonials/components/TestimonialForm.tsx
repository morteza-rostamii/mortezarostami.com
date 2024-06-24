import { useCreateTestimonial } from '../hooks/useCreateTestimonial';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

export const TestimonialForm = ({
  session,
  status,
}:any) => {
  const {
    formInput,
    errors,
    handInputChange,
    handSubmit,
    isLoading,
  } = useCreateTestimonial(session, status);

  return (
    <form 
    className="flex flex-col gap-4"
    onSubmit={handSubmit}
    >
      <div className='flex items-center gap-4'>
        <img 
        className='object-cover rounded-full'
        src={session?.user?.image || ''}
        width={40}
        height={40}
        alt='user'
        />
        <h1 className='font-bold'>
        Welcome, {session?.user?.name}
        </h1>
      </div>

      <h2 className='text-gray-500 font-bold'>
        Please Leave me a nice testimonial!
      </h2>
      
      <div className="flex flex-col gap-2">
        <Label 
        className="flex items-center gap-3 text-base font-medium text-gray-500"
        htmlFor="occupation">
          Enter your occupation
          <span 
          className='text-red-500 text-2xl font-bold'
          style={{
            display: !!(errors.occupation.length) ? 'block' : 'none'
          }}
          >*</span>
        </Label>
        <Input
        placeholder="Your occupation"
        name='occupation'
        value={formInput.occupation}
        onChange={handInputChange}
        />
        <div className="text-red-500 mt-2">
          {errors.occupation.length
          ?(
            errors.occupation.map((el:any, i:number) => (<span key={i}>{el}</span>))
          ):''
          }
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label 
        className="flex items-center gap-3 text-base 
        font-medium text-gray-500"
        htmlFor="text"
        >
          Enter your testimonial
          <span 
          className='text-red-500 text-2xl font-bold'
          style={{
            display: !!(errors.text.length) ? 'block' : 'none'
          }}
          >*</span>
        </Label>
        <Textarea
        placeholder="Your testimonial"
        rows={6}
        name='text'
        onChange={handInputChange}
        />
        <div className="text-red-500 mt-2">
          {errors.text.length
          ?(
            errors.text.map((el:any, i:number) => (<span key={i}>{el}</span>))
          ):''
          }
        </div>
      </div>

      <Button
      className="flex items-center gap-4 font-bold text-xl scale-anime-05"
      variant={'prime'}
      disabled={!!(errors.occupation.length) || !!(errors.text.length)}
      >
        SEND
        {isLoading ? <Loader2 className="mx-auto h-6 w-6 animate-spin" /> : ''}
      </Button>
      
    </form>
  )
}
