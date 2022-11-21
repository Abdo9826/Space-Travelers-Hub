import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/Navbar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import { Setmissions } from './Redux/missions-redux';
import { getRockets } from './Redux/rocket-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Setmissions());
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
