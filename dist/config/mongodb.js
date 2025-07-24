"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const username = encodeURIComponent(process.env.MONGODB_USERNAME || "");
const password = encodeURIComponent(process.env.MONGODB_PASSWORD || "");
const cluster = process.env.MONGODB_CLUSTER || "";
const db = process.env.MONGODB_DB || "";
const appName = process.env.MONGODB_APPNAME || "";
const uri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${db}?retryWrites=true&w=majority&appName=${appName}`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
exports.client = new mongodb_1.MongoClient(uri, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
