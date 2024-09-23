import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import PropertyDetails from './components/PropertyDetails';
import CreateProperty from './components/CreateProperty';
import EditProperty from './components/EditProperty';
import UpdateProfile from './components/UpdateProfile';
import PropertiesPage from './components/PropertiesPage';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';
import Booking from './components/Booking';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/create-property" element={<CreateProperty />} />
        <Route path="/edit-property/:id" element={<EditProperty />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/booking" element={<Booking />} /> 
      </Routes>
    </Router>
  );
};

export default App;



