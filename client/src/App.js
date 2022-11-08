// React App with Router
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import UserPage from './components/UserPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/user" element={<UserPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
