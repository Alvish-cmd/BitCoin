import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import image from "./img/Login_Poster.png";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validEmail, validPassword } from "../Login/Regex";
import { useNavigate } from "react-router-dom";
import axios, { AxiosResponse,AxiosError } from 'axios';

import "./login.css";

// Logic for Login
interface LoginFormProps {
  email: string,
  password: string,
};


const LoginForm: React.FC = () => {
  // const [formData, setFormData] = useState<LoginFormProps>({ email: '', password: '' });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   // const { name, value } = event.target;
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  //   console.log(formData)
  // };
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email && password) {
      try {
        const config = {
          email: email,
          password: password,
        }

        const response: AxiosResponse = await axios.post('https://coin-a-abhi6284.onrender.com/api/login', config);
        console.log(response.data); 
        // console.log(response.data.message);
        
        if (response.status === 201) {
          navigate("/Dashboard");
        }
        else{
          
        }

      } catch (error) {
        const err = error as AxiosError
        console.log(err.response?.data)
        toast.error(" "+err.response?.data, {
          transition: Flip,
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
  
          theme: "dark",
        });
        
      }
    }
    if (!email && !password) {
      toast.error("Please fill in both Email and Password.", {
        transition: Flip,
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

        theme: "dark",
      });


    }
    else if (!email) {
      toast.error("Please fill a Email ", {
        transition: Flip,
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

        theme: "dark",
      });
    }

    else if (!validEmail.test(email)) {

      toast.error("Please Enter a valid Email", {
        transition: Flip,
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

        theme: "dark",
      });
    }

    else if (!password) {
      toast.error("Please fill a password ", {
        transition: Flip,
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

        theme: "dark",
      });
    }


  };

  // Login button Material ui custom css
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    backgroundColor: "#77B633",
    width: "360px",
    borderRadius: "5px",
    fontWeight: "600",
    height: "40px",
    "&:hover": {
      backgroundColor: "#4BCA87",
    },
  }));

  return (

    <div className="main">
      <div className="image left">
        <div className="imgHandle">
          <img className="img" src={image} alt="" />
        </div>
      </div>
      <div className="image right">
        <div className="rightContent">
          {/* Image Mange */}
          <div className="formImg">{/* <img src="" alt="image" /> */}</div>

          {/* Welcome text */}
          <div className="formWelcome">
            <h2>Welcome Back.</h2>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Email filed */}
            <div className="formEmail">
              <Box
                sx={{
                  "& > :not(style)": {
                    m: 0,
                    width: "360px",
                    borderRadius: "10px",
                  },
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }}
                  variant="outlined"
                  sx={{
                    "& > :not(style)": {
                      my: 2,
                      borderRadius: "10px",
                      // height: "50px",
                    },
                  }}
                />
              </Box>
            </div>

            {/* Password Filed */}
            <div className="formPassword">
              <Box
                sx={{
                  "& > :not(style)": {
                    m: 0,
                    width: "360px",

                    borderRadius: "10px",
                  },
                }}
              >
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    sx={{
                      "& > :not(style)": {
                        borderRadius: "10px",
                      },
                    }}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Box>
            </div>

            {/* Forget Password Filed */}
            <div className="formForgetLink">
              <span>
                <a href="#">Forget the password?</a>
              </span>
            </div>

            {/* Loign button */}
            <div className="formLbutton">
              <Button type="submit">
                <ColorButton variant="contained">
                  <span>Log In</span>
                </ColorButton>
              </Button>
            </div>
            <ToastContainer transition={Flip} />
            <div className="formRegister">
              {/* {error && <span style={{ color: "red" }}>{error}</span>} */}
              <span>
                Don't have an account?&nbsp;&nbsp;
                <a href="/register">Sign Up Now </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
