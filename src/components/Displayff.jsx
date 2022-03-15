import { useState, useEffect } from "react"

// API
import { fetch_files } from "../services/Apis"


const Displayff = ()=>{
    const [files, setFilse] = useState([])
    const [folders, setFolders] = useState([])

    const getFiles = async() => {
        const response = await fetch_files()
        setFilse(response.data)
        console.log(response.data);
    }

    useEffect(()=>{
        getFiles()
    }, [])

    return(
        <>
        <div className="container">
            {
                files.length !== 0 && 
                files.map( ele => {
                    return (
                        <p key={ele._id}>{`file: ${ele.FileName}`}</p>
                    )
                })
            }
            {
                folders.length !== 0 && 
                folders.map( ele => {
                    return (
                        <p key={ele}>it works for folders</p>
                    )
                })
            }
        </div>
        </>
    )
}

export default Displayff