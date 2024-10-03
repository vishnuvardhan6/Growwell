import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signup from './auth/Signup';
import Home from './components/ui/Home';
import Navbar from './components/Navbar';  // Importing Navbar component
import Login from './auth/login';

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <Navbar /> {/* Rendering the Navbar at the top */}
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
