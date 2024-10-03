import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Appbar from './components/Appbar'; // Import the Appbar component
import Home from './components/Home';       // Import Home component
import AboutUs from './components/AboutUs'; // Import About Us component
import Show from './components/Show';       // Import Show component
import User from './components/User';       // Import User component
import SignIn from './components/SignIn';   // Import SignIn component
import SignUp from './components/SignUp';   // Import SignUp component
import SignUpSuccess from './components/SignUpSuccess';
import SignInSuccess from './components/SignInSuccess';
import Doctors from './components/Doctors';
import TherapyPage from './components/TherapyPage';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 className="header-title">Healthy Heads - Students Mental Health</h3>
      </header>
      <Appbar /> {/* Place Appbar directly after the header */}
      <main className='App-body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/user" element={<User />} />
          <Route path="/show" element={<Show />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/signupsuccess" element={<SignUpSuccess />} />          
          <Route path="/signinsuccess" element={<SignInSuccess />} />        
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/therapy/:doctorName" element={<TherapyPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
