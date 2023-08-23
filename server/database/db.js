// require(`dotenv`).config();
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
const Connection = async (
  username = "dipanshmalhotra11",
  password = "atqdWOO2vSBRInYH"
) => {
  // const URL = `mongodb://localhost:27017/google-doc`;
  // const URL = `mongodb+srv://dipanshmalhotra11:atqdWOO2vSBRInYH@google-docs-clone.syeouui.mongodb.net/?retryWrites=true&w=majority`;
  // const URL = `mongodb+srv://felixfelix:Felix%40453@cluster0.4oc4hbc.mongodb.net/sheetsDB`;
  const URL = process.env.URL;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewURLParser: true,
    });
    console.log("database is wOrking ;) ");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};
export default Connection;
