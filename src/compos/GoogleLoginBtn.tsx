'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { TestimonialForm } from '@/frontend/features/testimonials/components/TestimonialForm';
import { useCreateTestimonial } from '@/frontend/features/testimonials/hooks/useCreateTestimonial';
import { Loader2 } from 'lucide-react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

export default function GoogleLoginBtn() {
  const { data: session, status, } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  if (status === 'loading') {
    return <Loader2 className="mx-auto h-12 w-12 animate-spin" />;
  }

  return (
    <div>
      {!session ? (
        <div className='flex flex-col items-center gap-4'>
          <h1
          className='text-lg font-bold text-gray-500'
          >
          Please do a quick login with google!
          </h1>
          
          <Button
          className="
          flex items-center gap-20 !justify-between scale-anime-05
          !px-3
          "
          variant={'prime_outline'}
          size={'lg'}
          onClick={async () => {
            setIsLoading(true);
            await signIn('google', {
              callbackUrl: '/', 
              prompt: 'select_account',
              redirect: false,
            })
            setIsLoading(false);
          }}
          //@ts-ignore
          disabled={(status === 'loading') || isLoading}
          >
            <div className='text-red-500'>
            <FaGoogle size={28}/>
            </div>
            <div className="flex items-center gap-2 text-lg font-bold">
              Sign in with Google
              {
                // @ts-ignore
                !!(status === 'loading' || isLoading) && <Loader2 className="mr-2 h-6 w-6 animate-spin" />
              }
            </div>
          </Button>
        </div>
      ) : (
        <TestimonialForm
        session={session}
        status={status}
        />
      )}
      {/* <button onClick={() => signOut()}>Sign out</button> */}
    </div>
  );
}
