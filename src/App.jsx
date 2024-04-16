import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './Widgets/home';
import OpenRoute from './components/Core/Auth/OpenRoute';
import Dashboard from "./pages/Dashboard";
import PrivateRoute from './components/Core/Auth/PrivateRoute';
import Community_chat from './pages/Community_chat';
import Weather from './Widgets/weather';
import Soil from './Widgets/soil';
import Smartbot from './Widgets/Smartbot';

function App() {
  return (
    <Routes>
      {/* Define your open routes */}
      <Route path="/" element={<OpenRoute><Home /></OpenRoute>} />
      <Route path="/login" element={<OpenRoute><Login /></OpenRoute>} />
      <Route path="/signup" element={<OpenRoute><SignUp /></OpenRoute>} />
      {/* Define your private routes */}
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/soil" element={<PrivateRoute><Soil /></PrivateRoute>} />
      <Route path="/weather" element={<PrivateRoute><Weather /></PrivateRoute>} />
      <Route path="/community" element={<PrivateRoute><Community_chat /></PrivateRoute>} />
      <Route path='/smartbot' element={<PrivateRoute><Smartbot /></PrivateRoute>} ></Route>
    </Routes>
  );
}

export default App;
