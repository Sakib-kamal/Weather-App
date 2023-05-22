import './App.css';
import Home from './Home';
import Apidata from './Apidata'
import Form from './pages/Form'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import User from './User';
import Login from './pages/Login';
import Cards from './Cards'
import Practice from './Practice';
import Register from './pages/Register';
import Weather from './pages/Weather';
import UsersData from './pages/UsersData';
import FormFocus from './pages/FormFocus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes> <Route index element = {<Home/>} /> </Routes>
        {/* <Routes> <Route path='/apidata' element={<Apidata />} /> </Routes> */}
        <Routes> <Route path='/cards' element={<Cards />} /> </Routes>
        <Routes> <Route path='/login' element={<Login />} /> </Routes>
        <Routes><Route path='/user/:id' element={<User />} /> </Routes>
        {/* <Routes><Route path='/practice' element={<Practice />} /> </Routes> */}
        <Routes><Route path='/register' element={<Register />} /> </Routes>
        {/* <Routes><Route path='/weather' element={<Weather />} /> </Routes> */}
        {/* <Routes><Route path='/userdata' element={<UsersData />} /> </Routes> */}
        <Routes><Route path='/focus' element={<Form/>} /> </Routes>
        <Routes><Route path='/formfocus' element={<FormFocus/>} /> </Routes>
  

      </BrowserRouter>
    </div>
  );
}

export default App;
