
export const NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV;
export const MONGO_URL = process.env.NEXT_PUBLIC_MONGO_URL || '';
export const API_URL = NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_API_URL_DEV : process.env.NEXT_PUBLIC_API_URL_PRO;

export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '';
export const GOOGLE_CLIENT_SECRET = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || '';
export const NEXTAUTH_SECRET = process.env.NEXT_PUBLIC_NEXTAUTH_SECRET || '';
