
import { API_URL } from '@/app/_libs/config';
import helper from '@/utils/helper';
import { faker } from '@faker-js/faker';
import { create } from 'zustand'

export const useSiteStore = create<any>((
  set: any, 
  get: any
) => ({
  testimonials: [],
  loadTestimonials: true,

  isLoading: false,

  async fetchTestimonialsAct() {
    try {
      set((s:any) => ({
        ...s,
        loadTestimonials: true,
      }));
      const response = await fetch(API_URL + 'testimonials', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      });
      set((s:any) => ({
        ...s,
        loadTestimonials: false,
      }));
      if (!response.ok) throw new Error(`Error fetching testimonials: ${response.statusText}`);
      
      const data = await response.json();
      console.log('fetch testimonials: ', data);

      const items = Array.from({length: 3}).map(() => {
        return {
          id: helper.getRandomId(),
          text: faker.lorem.words(28), 
          username: faker.person.firstName(),
          occupation: faker.lorem.word(),
          avatar: faker.image.avatar(),
        }
      });
      
      set((s:any) => ({
        ...s,
        testimonials: [...data.data, ...items],
      }));
    }
    catch(err:any) {
      console.log(err?.message || err);
      set((s:any) => ({
        ...s,
        loadTestimonials: false,
      }));
    }
  },
}));

//@ts-ignore
const unsub = useSiteStore.subscribe((state:any) => {
  console.log('useSiteStore:', state);
});