import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Demo from './Components/Demo/Demo';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <h1>Lost not dead</h1> */}
      <Header> </Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/demo' element={<Demo></Demo>}></Route>
      </Routes>
    </div >
  );
}

export default App;
