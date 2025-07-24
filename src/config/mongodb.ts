import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const username = encodeURIComponent(process.env.MONGODB_USERNAME || "");
const password = encodeURIComponent(process.env.MONGODB_PASSWORD || "");
const cluster = process.env.MONGODB_CLUSTER || "";
const db = process.env.MONGODB_DB || "";
const appName = process.env.MONGODB_APPNAME || "";

const uri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${db}?retryWrites=true&w=majority&appName=${appName}`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
