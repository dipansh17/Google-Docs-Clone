import mongoose from "mongoose";
const Connection = async (
  username = "dipanshmalhotra11",
  password = "atqdWOO2vSBRInYH"
) => {
  const URL = `mongodb://localhost:27017/google-doc`;
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
