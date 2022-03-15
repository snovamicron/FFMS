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
    },
    childeFolderNames:{
        type: Array
    },
    childeFilesNames:{
        type: Array
    }
})

export default model('FolderData', FolderSchema)