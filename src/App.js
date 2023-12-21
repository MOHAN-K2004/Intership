
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from './Components/Navbar';
import Form from './Components/Form';
import UpdateForm from './Components/UpdateForm';
import Table from './Components/Table';

import { States } from "./States";
import Register from './Components/Register';
import Login from './Components/Login';
import UserDetails from './Components/UserDetails';
import UpdateRegister from './Components/UpdateRegister';
import Admindetails from './Components/Admindetails';

function App() {
  return (
    <States>
   <BrowserRouter>
       <Routes>
        <Route path='/form'element={<Form/>}/>
        <Route path='/updateform/:id'element={<UpdateForm/>}/>
        <Route path='/table'element={<Table/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/userdetails' element={<UserDetails/>}/>
        <Route path='/admindetails' element={<Admindetails/>}/>
        <Route path='/updateRegister/:id' element={<UpdateRegister/>}/>
        <Route path='/register' element={<Register/>}/>

       </Routes>
   </BrowserRouter>
   </States>
  );
}

export default App;
