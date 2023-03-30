import "./App.css";
import RegisterForm from "./Components/Register/Register";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LoginForm from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import MyChart from "./Charts/charts"; 
import { useState } from "react";




function App() {
  const [login,Islogin] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm/>}></Route>
        <Route path="/register" element={<RegisterForm/>}></Route>
        <Route path="/" element={<MyChart/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
