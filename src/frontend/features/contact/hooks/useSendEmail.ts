import { API_URL } from "@/app/_libs/config";
import { useSiteStore } from "@/frontend/stores/store";
import { useEffect, useState } from "react";

export function useSendEmail() {
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: [],
    email: [],
    message: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const errors:any = {
      name: [],
      email: [],
      message: [],
    };

    if (!formInput.name) 
      errors.name.push('Name is required');

    if (!formInput.email) 
      errors.email.push('Email is required');
    
    if (!formInput.message) 
      errors.message.push('Message is required');

    setErrors(errors);
  }

  const handInputChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
  
    switch(name) {
      case 'name':
        setFormInput((c:any) => ({...c, name: value}));
        break;
      case 'email':
        setFormInput((c:any) => ({...c, email: value}));
        break;
      
      case 'message':
        setFormInput((c:any) => ({...c, message: value}));
        break;

      default:
        break;
    }
  }

  const handSubmit = async (e:any) => {
    e.preventDefault();

    validate();

    if (
      errors.name.length ||
      errors.email.length ||
      errors.message.length
      
    ) return;
    
    try {
      
    }
    catch(err:any) {
      console.log('Send message Failed!', err?.message || err);
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