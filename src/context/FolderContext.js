import { createContext, useState } from "react";

export const FolderContext = createContext()

const FolderContextProvider = ({children})=>{
    const [currentFolder, setCurrentFolder] = useState({
        name:'root',
        folder:{}
    })
    const [fileUpload ,setFileUpload] = useState({})
    const [folderUpload ,setFolderUpload] = useState({})
    return(
        <FolderContext.Provider value={{
            currentFolder,
            setCurrentFolder,
            fileUpload,
            setFileUpload,
            folderUpload,
            setFolderUpload
        }}>
            { children }
        </FolderContext.Provider>
    )
}

export default FolderContextProvider