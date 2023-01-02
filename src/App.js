import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Demo from './Components/Demo/Demo';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register/Register';
import Order from './Components/Order/Order';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import VolunteerRegistartion from './Components/VolunteerRegistartion/VolunteerRegistartion';
import AddService from './Components/AddService/AddService';
import OrderDetails from './Components/OrderDetails/OrderDetails';
import UpdateService from './Components/UpdateService/UpdateService';

function App() {
  return (
    <div className="App">
      {/* <h1>Lost not dead</h1> */}
      <Header> </Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/demo' element={<Demo></Demo>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/addService' element={<AddService></AddService>}></Route>
        <Route path='/reg4volunteer' element={<VolunteerRegistartion></VolunteerRegistartion>}></Route>
        <Route path='/orderDetails' element={<OrderDetails></OrderDetails>}></Route>
        <Route path='/updateService/:id' element={<UpdateService></UpdateService>}></Route>


        <Route path='/order/:id' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>

      </Routes>
    </div >
  );
}

export default App;
