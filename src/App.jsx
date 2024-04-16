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

function App() {
  return (
    <Routes>
      {/* Define your open routes */}
      <Route path="/login" element={<OpenRoute><Login /></OpenRoute>} />
      <Route path="/soil" element={<OpenRoute><Soil /></OpenRoute>} />
      <Route path="/weather" element={<OpenRoute><Weather /></OpenRoute>} />
      <Route path="/signup" element={<OpenRoute><SignUp /></OpenRoute>} />
      <Route path="/" element={<OpenRoute><Home /></OpenRoute>} />
      {/* Define your private routes */}
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/community" element={<PrivateRoute><Community_chat /></PrivateRoute>} />

    </Routes>
  );
}

export default App;
