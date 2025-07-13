import mongoose from "mongoose";


export const connectToMongo = async (mongoUrl:string) => {
    try {
        await mongoose.connect(mongoUrl || "");
        console.log("✅ Connected to MongoDB");
      } catch (err) {
        console.error("❌ MongoDB connection failed:", err);
        process.exit(1);
      }
}

export const disconnectFromMongo = async () => {
    try {
      await mongoose.disconnect();
      console.log("✅ Disconnected from MongoDB");
    } catch (err) {
      console.error("❌ Failed to disconnect from MongoDB:", err);
    }
  };
