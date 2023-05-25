import mongoose from 'mongoose';


mongoose.set("strictQuery", false);

async function main() {
  mongoose.connect("mongodb://0.0.0.0:27017/node_babel_jest");
}

export function initDB() {
  main().then(() => console.log("db connected successfully!!!")).catch((err) => console.log(err));
}