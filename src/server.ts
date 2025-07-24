import app from "./app";
import { client } from "./config/mongodb";
const port = 3000;

let server;

const bootstrap = async () => {
  await client.connect();
  console.log("Connected to MongoDB");

  // console.log(collection, "collection");
  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};
bootstrap();
