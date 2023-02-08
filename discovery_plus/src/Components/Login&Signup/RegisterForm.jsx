import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
import { registerApi } from "../Context/User";
import {toast} from "react-toastify";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import AuthContext from "../Context/context";
import { useContext} from "react";
import Divider from '@mui/material/Divider';
import style from './login.css'
import config from "../../config/config";
import { useNavigate } from "react-router-dom";
export default function RegisterForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { showLoginForm, setShowLoginForm , user} = useContext(AuthContext);
  const [formType, setFormType] = useState("login");
  let history = useNavigate();
  const register = () => {

    registerApi(name, email, password)
    .then(() => setFormType("login"))
    .catch(() => {
      toast('Sign Up didn\'t work', {
        type: 'error'
      })
    });
  };

  return (
  <div className="parent_container_login"> 
        <div className="loginimage_logo">
         <img src="./login_logo.png" alt="" />
        </div>
       <div className="title_login">
       <h4>Sign Now</h4>
       </div>
        <div className="inner_conter">

   
    <DialogContent >
    <TextField
    
      margin="dense"
      id="name"
      label="Name"
      type="name"
      fullWidth
      variant="outlined"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <TextField
     
      margin="dense"
      id="email"
      label="Email Address"
      type="email"
      fullWidth
      variant="outlined"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <TextField
      autoFocus
      margin="dense"
      id="password"
      label="Password"
      type="password"
      fullWidth
      variant="outlined"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <Button
      variant="contained"
      style={{ marginTop: 20 }}
      fullWidth
      onClick={() => {
        register()
        history('/login');
        window.alert("Registration Successful")
        
      }}
    >
      Sign Up
    </Button>
  </DialogContent>
  <Divider />
        
        <DialogContent>
          <DialogActions>
            <Button
              onClick={() =>
                setFormType(formType === "Sign Up" ? history('/register') : history('/login'))
              }
            >
              {formType === "login" ?"Login":"Sign Up" }
            </Button>
            <a href={`https://github.com/login/oauth/authorize?client_id=${config.GITHUB_OAUTH_CLIENT_ID}`}>
              <Button>Login With Github</Button>
            </a>
          </DialogActions>
        </DialogContent>
   
    </div>
    </div>
  );
}
