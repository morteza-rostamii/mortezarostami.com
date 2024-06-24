
import { dbConnect } from "@/app/_libs/db";
import Testimonial from "@/app/_models/Testimonials";
import User from "@/app/_models/User";
import {HttpStatusCode} from 'axios'

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log('create testimonial-------------------')
  try {
    await dbConnect();
    
    const body:{
      text:string,
      avatar:string,
      username: string,
      occupation: string,
    } = await req.json();
    console.log(body);
    //return NextResponse.json({message: body});

    if (
      !body?.text ||
      !body?.avatar ||
      !body?.username ||
      !body?.occupation
    ) return NextResponse.json(
      {data: null, message: '-Failed!-'},
      {status: HttpStatusCode.BadRequest}
    );

    const testimonial = await Testimonial.create({
      text: body.text,
      avatar: body.avatar,
      username: body.username,
      occupation: body.occupation,
    });

    return NextResponse.json(
      {data: testimonial, message: 'Created!',},
      {status: HttpStatusCode.Created},
    );
  }
  catch(err:any) {
    return NextResponse.json(
      {message: err?.message || err || 'empty error'},
      {status: HttpStatusCode.Ok},
    )
  }
}

// GET: /testimonials
export async function GET(req: NextRequest) {
  console.log('get testimonials-------------------')
  try {
    await dbConnect();

    const testimonials = await Testimonial.find();
    
    return NextResponse.json(
      {data: testimonials, message: 'testimonials',},
      {status: HttpStatusCode.Ok},
    );
  }
  catch(err:any) {
    return NextResponse.json(
      {message: err?.message || err || 'empty error'},
      {status: HttpStatusCode.BadRequest},
    )
  }
}
