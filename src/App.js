import './App.css';
import CreateFolder from './components/CreateFolder';


// components
import Displayff from './components/Displayff';
import FileUploadForm from './components/FileUploadForm';

// context
import FolderContextProvider from './context/FolderContext';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo192.png" className="App-logo" alt="logo" />
        <FolderContextProvider>
        <div className='inputBox'>   
        <FileUploadForm/>
        <CreateFolder/>
        </div>
        <Displayff/>
        </FolderContextProvider>
      </header>
    </div>
  );
}

export default App;
