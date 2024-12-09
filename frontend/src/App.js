import React from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Weather from './components/Weather';
import Report from './components/Report';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';



const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Signup />} />
      <Route
        path="/weather"
        element={
          <ProtectedRoute>
            <Weather />
          </ProtectedRoute>
        }
      />
      <Route
        path="/report"
        element={
          <ProtectedRoute>
            <Report />
          </ProtectedRoute>
        }
      />
    </Routes>
  </Router>
);

export default App;
