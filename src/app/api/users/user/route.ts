
import { dbConnect } from "@/app/_libs/db";
import User from "@/app/_models/User";
import {HttpStatusCode} from 'axios'

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log('getUser-------------------')
  try {
    await dbConnect();

    

    return NextResponse.json(
      {message: 'otp not valid',},
      {status: HttpStatusCode.BadRequest},
    );
  }
  catch(err:any) {
    return NextResponse.json(
      {message: err?.message || err || 'empty error'},
      {status: HttpStatusCode.BadRequest},
    )
  }
}
