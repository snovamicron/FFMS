import { useState, useContext, useRef } from 'react'

// API
import { save_files } from '../services/Apis'

// Context
import { FolderContext } from '../context/FolderContext'


const FileUploadForm = () =>{

    const uploadForm = useRef()

    const { setFileUpload, currentFolder } = useContext(FolderContext)

    const [uploadedFiles, setUploadedFiles] = useState(null)

  const onFileChange = (e)=>{
    setUploadedFiles(e.target.files[0])
  }

  const onUpload = async()=>{
    const formData = new FormData()
    formData.set('file',uploadedFiles)
    uploadForm.current.reset()
     const response = await save_files(formData, currentFolder.name)
     setFileUpload(response.data)
  }
    return(
        <form ref={uploadForm} onSubmit={(e) => e.preventDefault()} className='fileForm'>
        <p>input your file</p>
        <input type='file' name='file' onChange={onFileChange}/>
        <button type='submit' onClick={onUpload}>upload the file</button>
        </form>
    )
}

export default FileUploadForm