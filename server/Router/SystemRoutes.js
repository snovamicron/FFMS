import express from 'express'
import formidable from 'formidable'
import fse from 'fs-extra'
import { body, validationResult } from 'express-validator'

// models
import FileData from '../database/models/FileData.js'
import FolderData from '../database/models/FolderData.js'


const router = express.Router()

//end point for save file


router.post('/savefile/:fn?', (req, res) => {

    
    console.log(req.params.fn)

    const form = formidable({});

    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.log(err)
            return res.status(500).send('internal server error')
        }
        if (!files) {
            return res.status(400).send('File not uploaded')
        }
        try {
            console.log(files)
            const dataBaseURL = `C:/Users/NOVA/Desktop/main/ffms/server/database/localdatabase/${files.file.originalFilename}`
            await fse.copy(files.file.filepath, dataBaseURL)
            const response = await FileData.create({
                parentFolder: req.params.fn,
                FilePath: dataBaseURL,
                FileName: files.file.originalFilename,
                FileType: files.file.mimetype
            })
            return res.status(200).json(response)
        } catch (error) {
            console.log('Getting error while save new file on database ' + error)
            return res.status(500).send('internal server error')
        }
    })
})

// end point for fetch all files of a folder
router.get('/fetchfiles/:fn?', async (req, res) => {
    try {
        if (req.params.fn !== 'root') {
            let folder = await FolderData.findOne({ folderName: req.params.fn }).exec()
            if (!folder) {
                res.status(404).send('Folder not found')
            }
        }
        let files = await FileData.find({ parentFolder: req.params.fn }).exec()
        if (files.length === 0) {
            res.status(404).send('no files')
        }
        res.status(200).json(files)
    } catch (error) {
        res.status(500).send('internal server error')
        console.log('getting error while fetch files ' + error);
    }
})


//end point for create new folder

router.post('/createfolder', [
    body('folderName').not().isEmpty(),
    body('parentFolderName').not().isEmpty()
], async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { folderName, parentFolderName } = req.body
        let folder = await FolderData.findOne({ folderName }).exec()
        if (!folder) {
            folder = await FolderData.create({
                folderName,
                parentFolderName
            })
            res.status(200).json(folder)
        }
        res.status(400).send('folder is already exist')
    } catch (error) {
        res.status(500).send('internal server error')
        console.log('getting error while creating new folder ' + error);
    }
})

// end point for fetch all folders of a folder
router.get('/fetchfolders/:fn?', async (req, res) => {
    try {
        if (req.params.fn !== 'root') {
            let folder = await FolderData.findOne({ folderName: req.params.fn }).exec()
            if (!folder) {
                res.status(404).send('Folder not found')
            }
        }
        let folders = await FolderData.find({ parentFolderName: req.params.fn }).exec()
        if (folders.length === 0) {
            res.status(404).send('no folders')
        }
        res.status(200).json(folders)
    } catch (error) {
        res.status(500).send('internal server error')
        console.log('getting error while fetch files ' + error);
    }
})


// end point for fetch one folder data
router.get('/fetchonefolder/:fn?', async (req, res) => {
    try {
        let folder = await FolderData.findOne({ folderName: req.params.fn }).exec()
        if (!folder) {
            res.status(404).send('Folder not found')
        }
        res.status(200).json(folder)
    } catch (error) {
        res.status(500).send('internal server error')
        console.log(error)
    }
})



export default router
