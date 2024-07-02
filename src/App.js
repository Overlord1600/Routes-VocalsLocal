
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import CustomHome from './pages/home';
import CustomLogin from './pages/login';
import CustomRegister from './pages/signUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState } from 'react';

function App() {
  const [isAuth,setAuth] = useState(false);
  console.log(isAuth);
  return (
    
    <div className="container">
     <BrowserRouter>
        <Routes>
          <Route path='/login' element={<CustomLogin setIsAuth={setAuth}/>} />
          <Route path='/register' element={<CustomRegister setIsAuth={setAuth}/>} />
          <Route 
            path='/home' 
            element={ isAuth ? <CustomHome /> : <Navigate to = '/login'/>}  
          />
             <Route path='*' element={<CustomLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
