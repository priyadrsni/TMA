import mongoose from "mongoose";

const { MONGO_TMADB_URI} = process.env;

const connectTMADb = () => {
  mongoose.connect(MONGO_TMADB_URI, (err, data) => {
    if (err) {
      console.log(
        `Database connection failed because of below error \n Error: ${err} \n. Exiting now...`
      );
      process.exit(1);
    }
    console.log("Successfully connected to User DB.");
  });
};

export default connectTMADb;
