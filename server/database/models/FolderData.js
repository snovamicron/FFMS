import mongoose from "mongoose";

const { Schema, model } = mongoose

const FolderSchema = new Schema({
    folderName:{
        type: String,
        required: true,
        unique: true
    },
    parentFolderName:{
        type: String,
        required: true
    }
})

export default model('FolderData', FolderSchema)