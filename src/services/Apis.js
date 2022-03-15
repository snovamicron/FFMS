import axios from 'axios'


// API for saveing multiple files on database

export const save_files = async (payload, folderName = 'root')=>{
    try {
        const response = await axios({
            method:'POST',
            url:`http://localhost:4000/savefile/${folderName}`,
            data: payload
        })

        return response
    } catch (error) {
        console.log('getting error while calling save_files API ' + error)
    }
}


// API for fetching all files

export const fetch_files = async (folderName = 'root')=>{
    try {
        const response = await axios({
            method:'GET',
            url:`http://localhost:4000/fetchfiles/${folderName}`
        })
        return response
    } catch (error) {
        console.log('getting error while calling fetch_files ' + error)
    }
}