// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './Widgets/home';
import OpenRoute from './components/Core/Auth/OpenRoute';
import Dashboard from "./pages/Dashboard";
import PrivateRoute from './components/Core/Auth/PrivateRoute';
import Community_chat from './pages/Community_chat';

function App() {
  return (
<<<<<<< HEAD
   <div>
    <Routes>
      <Route path="/" element={<OpenRoute><Home/></OpenRoute>}/>
=======
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
>>>>>>> 755a3b5e2c1f1780d4babab7ce1d9044435319cb
        <Route path="/login" element={<OpenRoute>
          <Login />
        </OpenRoute>} />
        <Route path="/signup" element={<OpenRoute>
<<<<<<< HEAD
        <SignUp />
        </OpenRoute>}/>
       <Route path='/dashboard' element={<PrivateRoute>
        <Dashboard />
       </PrivateRoute>}/>
       <Route path='/community' element={<PrivateRoute><Community_chat/></PrivateRoute>}/>
    </Routes>
   
   </div>
=======
          <SignUp />
        </OpenRoute>} />
        <Route path='/dashboard' element={<PrivateRoute>
          <Dashboard />
        </PrivateRoute>} />
      </Routes>
    </div>
>>>>>>> 755a3b5e2c1f1780d4babab7ce1d9044435319cb
  )
}

export default App
