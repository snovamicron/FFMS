import { useState, useEffect, useContext } from "react"

// API
import { fetch_files, fetch_folders, fetch_one_folder } from "../services/Apis"

// context
import { FolderContext } from "../context/FolderContext"

const Displayff = ()=>{
    const { fileUpload, folderUpload, currentFolder, setCurrentFolder } = useContext(FolderContext)     
    const [files, setFilse] = useState([])
    const [folders, setFolders] = useState([])

    const onFolderClick = (ele)=>{
        setCurrentFolder({folder: ele, name:ele.folderName})
    }

    const onBackFolder = async()=>{
        if(currentFolder.folder.parentFolderName === 'root'){
            setCurrentFolder({folder:{}, name:'root'})
            return
        }
        const response = await fetch_one_folder(currentFolder.folder.parentFolderName)
        if(response.data){
            setCurrentFolder({folder:response.data, name:response.data.folderName})
        }
    }

    const getFiles = async() => {
        const response = await fetch_files(currentFolder.name)
        if(response === undefined){
            setFilse([])
        }
        if(response.data){
            setFilse(response.data)
            return 
        }
    }

    const getFolders = async() => {
        const response = await fetch_folders(currentFolder.name)
        if(response === undefined){
            setFolders([])
        }
        if(response.data){
            setFolders(response.data)
        }
    }

    useEffect(()=>{
        getFiles()
        getFolders()
        return ()=>{
            console.clear()
        }
    }, [fileUpload, folderUpload, currentFolder])

    return(
        <>
            <span onClick={onBackFolder} style={{cursor:'pointer'}}>{`<==`}</span>
            <span>{`current folder: ${currentFolder.name}`}</span>
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
                        <p className="folder" onClick={() => onFolderClick(ele)} key={ele.folderName}>{`folder: ${ele.folderName}`}</p>
                    )
                })
            }
        </div>
        </>
    )
}

export default Displayff