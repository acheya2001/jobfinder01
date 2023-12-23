import mongoose from "mongoose";

const DBConnection = async () => {

    const MONGO_URI = `mongodb+srv://rahmahammami:codeforinterview@cluster0.mpelvm8.mongodb.net/`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;