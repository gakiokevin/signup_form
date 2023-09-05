import React, { useState } from "react";
import RegisterUser from "./Register";
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import HomePage from "./HomePage";
import Login from "./Login";
import "./App.css";

function App() {

  return (
   <>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="signup" element={<RegisterUser/>}/>
            <Route path="homepage" element={<HomePage/>}/>
          </Routes>
       </BrowserRouter>
   </>
  );
}

export default App;
