import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

// API
import { save_files } from './services/Apis'

// components
import Displayff from './components/Displayff';


function App() {

  const [uploadedFiles, setUploadedFiles] = useState('')

  const onFileChange = (e)=>{
    setUploadedFiles(e.target.files[0])
  }

  const onUpload = async()=>{
    const formData = new FormData()
    formData.set('file',uploadedFiles)
    const response = await save_files(formData)
    console.log(response.data)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='inputBox'>   
        <form onSubmit={(e) => e.preventDefault()}>
        <p>input your file</p>
        <input type='file' name='file' onChange={onFileChange}/>
        <button type='submit' onClick={onUpload}>upload the file</button>
        </form>
        </div>
        <Displayff/>
      </header>
    </div>
  );
}

export default App;
