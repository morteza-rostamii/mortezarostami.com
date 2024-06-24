import { MongoClient } from 'mongodb';
import { MONGO_URL } from './config';
import mongoose from 'mongoose';

const client = new MongoClient(MONGO_URL || '', {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
});

// for next-auth
const clientPromise = client.connect();

//for connecting to db manually

//@ts-ignore
let cached:any = global.mongoose;

if (!cached) {
  //@ts-ignore
  cached = global.mongoose = {conn: null, promise: null};
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      //useNewUrlParser: true,
      //userUnifiedTopology: true,
      //bufferCommands: true,
    };

    cached.promise = mongoose.connect(MONGO_URL, opts).then((mongoose:any) => {
      return mongoose;
    })
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export {clientPromise, dbConnect};