import dotenv from "dotenv";
dotenv.config();

const keys = {
  PORT: process.env.PORT,
  mongodb: process.env.MONGODB_URI
};
export default keys;
