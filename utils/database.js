import mongoose from "mongoose";

let isConnected = false; // track connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if(isConnected) {
        console.log("Mongo DB is already connected");
        return;
    }
    else {
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                dbName: "share_prompt",
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            isConnected = true;
            console.log("Mongo DB connected");

        } catch (error) {
            console.log("Error while connecting to Mongo DB", error);
        }
    }

}