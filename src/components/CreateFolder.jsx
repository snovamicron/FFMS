import { useContext } from "react"

//context
import { FolderContext } from "../context/FolderContext"

// API
import { save_folder } from "../services/Apis"

const CreateFolder = ()=>{

    const { currentFolder, setFolderUpload } = useContext(FolderContext)

    const onCreateFolder = async()=>{
        const folderName = prompt('Enter Folder Name')
        console.log(folderName)
        const response = await save_folder({
            folderName,
            parentFolderName: currentFolder.name
        })
        setFolderUpload(response.data)
    }

    return(
        <>
        <button onClick={onCreateFolder}>create folder</button>
        </>
    )
}

export default CreateFolder