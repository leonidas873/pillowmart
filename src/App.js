import 'bootstrap/dist/css/bootstrap.min.css';
import './reset.css';
import './App.css';
import Main from './components/main/Main';

import Header from './components/header/Header';
  


function App() {


  return (
    <div className="App">
     <Header/>
     <Main/>
    </div>
  );
}

export default App;
