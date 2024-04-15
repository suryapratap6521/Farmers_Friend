import { useState } from 'react'
import {Routes,Route} from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import OpenRoute from './components/Core/Auth/OpenRoute';
import Dashboard from "./pages/Dashboard";
import PrivateRoute from './components/Core/Auth/PrivateRoute';
import Community_chat from './pages/Community_chat';



function App() {
 

  return (
   <div>
    <Routes>
      <Route path="/" element={<OpenRoute><Home/></OpenRoute>}/>
        <Route path="/login" element={<OpenRoute>
        <Login />
        </OpenRoute>}/>
        <Route path="/signup" element={<OpenRoute>
        <SignUp />
        </OpenRoute>}/>
       <Route path='/dashboard' element={<PrivateRoute>
        <Dashboard />
       </PrivateRoute>}/>
       <Route path='/community' element={<PrivateRoute><Community_chat/></PrivateRoute>}/>
    </Routes>
   
   </div>
  )
}

export default App
