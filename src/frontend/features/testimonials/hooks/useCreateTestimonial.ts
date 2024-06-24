import { API_URL } from "@/app/_libs/config";
import { useSiteStore } from "@/frontend/stores/store";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export function useCreateTestimonial(session:any, status:string) {
  const [formInput, setFormInput] = useState({
    occupation: '',
    text: '',
  });

  const [errors, setErrors] = useState({
    occupation: [],
    text: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const {fetchTestimonialsAct} = useSiteStore();

  const validate = () => {
    const errors:any = {
      occupation: [],
      text: [],
    };

    if (!formInput.occupation) 
      errors.occupation.push('Occupation is required');
    
    if (!formInput.text) 
      errors.text.push('Testimonial is required');

    setErrors(errors);
  }

  const handInputChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
  
    switch(name) {
      case 'occupation':
        setFormInput((c:any) => ({...c, occupation: value}));
        break;
      
      case 'text':
        setFormInput((c:any) => ({...c, text: value}));
        break;

      default:
        break;
    }
  }

  const handSubmit = async (e:any) => {
    e.preventDefault();

    validate();

    if (
      errors.occupation.length ||
      errors.text.length
      
    ) return;
    
    
    if (status === 'loading') return;
    if (!session) return;

    const payload = {
      text: formInput.text,
      occupation: formInput.occupation,
      avatar: session?.user?.image,
      username: session?.user?.name,
    };
    //console.log(payload);
    //return;
    try {
      setIsLoading(true);
      // create testimonials
      const response = await fetch(API_URL + 'testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      console.log(response);
      setIsLoading(false);

      if (!response.ok) {
        throw new Error(`Error creating testimonial: ${response.statusText}`);
      }
      const data = await response.json();
      console.log('create testimonial success!', data);

      await fetchTestimonialsAct();

      const section = document.querySelector('#testimonials');
      if (section)
        section.scrollIntoView({behavior: 'smooth'});
    }
    catch(err:any) {
      console.log('create testimonial Failed!', err?.message || err);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    validate();
  }, [formInput]);

  return {
    formInput,
    setFormInput,
    handSubmit,
    errors,
    handInputChange,
    isLoading,
  };
}