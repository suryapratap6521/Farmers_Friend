// import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';

// import Login from './pages/Login';
// import SignUp from './pages/SignUp';
import Home from './Widgets/home';
// import OpenRoute from './components/Core/Auth/OpenRoute';
// import Dashboard from "./pages/Dashboard";
// import PrivateRoute from './components/Core/Auth/PrivateRoute';

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<OpenRoute>
          <Login />
        </OpenRoute>} />
        <Route path="/signup" element={<OpenRoute>
          <SignUp />
        </OpenRoute>} />
        <Route path='/dashboard' element={<PrivateRoute>
          <Dashboard />
        </PrivateRoute>} />
      </Routes> */}
      <Home />
    </div>
  )
}

export default App
