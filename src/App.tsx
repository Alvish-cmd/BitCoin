import LoginForm from "./Components/Login/Login";
import "./App.css";
import RegisterForm from "./Components/Register/Register";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const handleRegister = (email: string, password: string) => 
{
  
  
}
  

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<Login2/>}></Route> */}
        <Route path="/" element={<LoginForm/>}></Route>
        <Route path="/register" element={<RegisterForm onRegister={handleRegister} />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
