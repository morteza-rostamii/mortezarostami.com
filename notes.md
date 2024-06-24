<!-- 

# Frontend portfolio:

# nextAuth: 
==

# google: 

npm install next-auth axios crypto

# mongoose model:

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { 
      type: String, 
      trim: true, 
      unique: true 
    },

    hash:{
      type:String
    },
    salt:{
      type:String
    },
    profile: {
      firstName: {
        type: String,
        trim: true,
      },
      lastName: {
        type: String,
        trim: true,
      },
      image: {
        type: String,
        trim: true,
      },
     
    }
  },
  { timestamps: true }
);

export default mongoose.models.users || mongoose.model("users", userSchema);

===

[…nextauth.js]

====================================================================

npx create-next-app@latest nextjs-google-auth

npm i next-auth

# get these from google cloud:

AUTH_GOOGLE_ID="your-google-client-id"
AUTH_GOOGLE_SECRET="your-google-client-secret"

# generate auth secrete and store it in .env
npx auth secret

AUTH_SECRET="your-auth-secret"

=======

# create and connect a mongodb database:
DATABASE_URL="mongodb+srv://<username>:<password>@<cluster-url>/<your-db-name>?retryWrites=true&w=majority&appName=<app-name>"

========

// @/lib/auth.config.ts

import { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export const authConfig: NextAuthConfig = {
  providers: [Google],
};

=========

// @/auth.ts

=========

// @/app/api/auth/[…nextauth]/route.ts

import { handlers } from "@/auth";

export const { GET, POST } = handlers;

========

npx auth secret

==========

# publish app
https://console.cloud.google.com/apis/credentials/consent?organizationId=0&project=mortezarostami


https://mydevpa.ge/blog/how-to-send-emails-using-next-14-resend-and-react-email
-->