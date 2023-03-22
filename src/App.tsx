import LoginForm from "./Components/Login/Login";
import "./App.css";
import RegisterForm from "./Components/Register/Register";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import React, { useState } from 'react';


const handleLogin = (email: string, password: string) => 
{
  // const [users, setUsers] = useState();
  if (email && password) {
  }
}
const handleRegister = (email: string, password: string) => 
{
  // const [users, setUsers] = useState();
  
}
  

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<Login2/>}></Route> */}
        <Route path="/" element={<LoginForm onSubmit={handleLogin}/>}></Route>
        <Route path="/register" element={<RegisterForm onRegister={handleRegister} />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
