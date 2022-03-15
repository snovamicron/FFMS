import logo from './logo.svg';
import './App.css';


// components
import Displayff from './components/Displayff';
import FileUploadForm from './components/FileUploadForm';

// context
import FolderContextProvider from './context/FolderContext';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FolderContextProvider>
        <div className='inputBox'>   
        <FileUploadForm/>
        </div>
        <Displayff/>
        </FolderContextProvider>
      </header>
    </div>
  );
}

export default App;
