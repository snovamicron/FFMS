import mongoose from "mongoose";

const { Schema, model } = mongoose

const FileSchema = new Schema({
    parentFolder:{
        type: String,
        required:true
    },
    FilePath:{
        type: String,
        required: true
    },
    FileName:{
        type: String,
        required: true
    },
    FileType:{
        type: String,
        required: true
    }
})


export default model('FileData', FileSchema)