
import './App.css';

import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import {Routes,Route,Link} from "react-router-dom"

// import {useSelector,useDispatch} from 'react-redux'
// import {increment,decrement} from './slice/counterSlice'
import Dashboard from './Pages/Dashboard';

function App() {

  return(
   <>
   <Navbar/>

 <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Dashboard" element={<Dashboard />} />
      </Routes>

   </>
  );
}

export default App;
