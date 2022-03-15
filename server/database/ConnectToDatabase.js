import mongoose from "mongoose";

const mongodbURI = 'mongodb+srv://sonova:fatBoyOmega2002@ffms.f2gzb.mongodb.net/FFMS?retryWrites=true&w=majority'

const ConnectToDatabase = async() => {
    try {
        await mongoose.connect(mongodbURI)
        console.log('successfully connected to database')
    } catch (error) {
        console.log('getting error while connecting to database ' + error)
    }
}

export default ConnectToDatabase