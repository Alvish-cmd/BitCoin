import "./App.css";
import RegisterForm from "./Components/Register/Register";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LoginForm from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<Login2/>}></Route> */}
        <Route path="/" element={<LoginForm/>}></Route>
        <Route path="/register" element={<RegisterForm/>}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
