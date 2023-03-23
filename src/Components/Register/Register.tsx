import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import image from "../Login/img/Login_Poster.png"
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import { ToastContainer, toast, Flip } from "react-toastify";
import { validEmail, validPassword } from "../Login/Regex";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";

type RegisterFormProps = {
  onRegister: (
    First_name: string,
    Last_name: string,
    email: string,
    password: string,
    Confi_password: string,
    acceptTerms: boolean,
  ) => void;
};

// Register form here
const RegisterForm :React.FC<RegisterFormProps> = ({ onRegister }) => {
  const [First_name, setFirst_name] = useState("");
  const [Last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confi_password, setConfi_password] = useState("");
  const [acceptTerms,setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();
    if (!First_name && !Last_name && !email && !password && !Confi_password && !acceptTerms) {
      toast.error("Please Fill All the filed.", {
        transition: Flip,
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

        theme: "dark",
      }); 
      
    } 
    else if (!First_name) {
      toast.error("Please Fill First name.", {
        transition: Flip,
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

        theme: "dark",
      });  
    } 
    else if (!Last_name) {
      toast.error("Please Fill Last name.", {
        transition: Flip,
        position: "top-right",
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
      toast.error("Please Fill Email.", {
        transition: Flip,
        position: "top-right",
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
        position: "top-right",
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
      toast.error("Please Fill Password.", {
        transition: Flip,
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

        theme: "dark",
      });  
    }
    else if (!Confi_password) {
      toast.error("Please Fill Email.", {
        transition: Flip,
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

        theme: "dark",
      });  
    }
    else if(!acceptTerms){
      toast.error("Checkbox is required", {
        transition: Flip,
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

        theme: "dark",
      }); 
    }
    
    onRegister(First_name, Last_name, email, password, Confi_password,acceptTerms);
  };  

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    backgroundColor: "#77B633",
    width: "380px",
    borderRadius: "5px",
    fontWeight: "600",
    height: "40px",
    "&:hover": {
      backgroundColor: "#4BCA87",
    },
  }));

  // For checkBox
  const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: 6,
    width: 24,
    height: 24,
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 0 0 1px rgb(16 22 26 / 40%)'
        : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
        : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background:
        theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
  }));
  
  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 24,
      height: 24,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  });
  
  // Inspired by blueprintjs
  function BpCheckbox(props: CheckboxProps) {
    return (
      <Checkbox
        sx={{
          '&:hover': { bgcolor: 'transparent' },
        }}
        disableRipple
        color="default"
        onChange={(e) => setAcceptTerms(e.target.checked)}
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        inputProps={{ 'aria-label': 'Checkbox demo' }}
        {...props}
      />
    );
  }
 
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
              <div className="formImg">
                {/* <img src="" alt="image" /> */}
              </div>
    
              {/* Welcome text */}
              <div className="formWelcome">
                <h2>Welcome to CoinX.</h2>
              </div>
              <form onSubmit={handleSubmit}>
              {/* First name filed */}
              <div className="formFirstName">
                <Box
                  sx={{
                    "& > :not(style)": {
                      m: 0,
                      mr:22,
                      width: "170px",
                      borderRadius: "10px",
                    },
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    value={First_name}
                    onChange={(e) => setFirst_name(e.target.value)}
                    sx={{
                      "& > :not(style)": { my:2, borderRadius: "10px", height: "50px" },
                    }}
                  />
                </Box>
              </div>
              {/* Last name filed */}
              <div className="formLastName">
                <Box
                  sx={{
                    "& > :not(style)": {
                      m: 0,
                      ml:50,
                      width: "180px",
                      borderRadius: "10px",
                    },
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    value={Last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                    sx={{
                      "& > :not(style)": { my:2, borderRadius: "10px", height: "50px" },
                    }}
                  />
                </Box>
              </div>

              {/* Email filed */}
              <div className="formEmail">
                <Box
                  sx={{
                    "& > :not(style)": {
                      m: 0,
                      ml:3,
                      width: "375px",
                      borderRadius: "10px",
                    },
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      "& > :not(style)": { my:0.5, borderRadius: "10px", height: "50px" },
                    }}
                  />
                </Box>
              </div>
    
              {/* Password Filed */}
              <div className="formPassword">
                <Box
                  sx={{
                    "& > :not(style)": {
                      m: 1,
                      ml:4,
                      width: "375px",
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
                    onChange={(e) => setPassword(e.target.value)}
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

              {/* Confirm Password Filed */}
              <div className="formCofiPassword">
                <Box
                  sx={{
                    "& > :not(style)": {
                      m: 0,
                      ml:3,
                      width: "375px",
                      borderRadius: "10px",
                    },
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Confirm Password"
                    variant="outlined"
                    type="password"
                    value={Confi_password}
                    onChange={(e) => setConfi_password(e.target.value)}
                    sx={{
                      "& > :not(style)": { my:1, borderRadius: "10px", height: "50px" },
                    }}
                  />
                </Box>
              </div>
    
              {/* Terms and condition Filed */}
              <div className="formTermstLink">
                  <span>
                  <BpCheckbox  />
                    <a href="#">Agree Terms & Conditions</a>
                  </span>
              </div>
              <ToastContainer transition={Flip} />
              {/* Register button */}
              <div className="formRbutton"> 
              <Button type="submit">
                <ColorButton variant="contained">
                  <span>Register</span>
                </ColorButton>
              </Button>
              </div>

              {/* Alread account filed */}
              <div className="formAlreadyAccount">
                <span>
                  Already have an account?&nbsp;&nbsp;<a href="/">Sign In Now{" "}</a>
                </span>
              </div>
              </form>
            </div>
          </div>
        </div>
  );
};
export default RegisterForm;
