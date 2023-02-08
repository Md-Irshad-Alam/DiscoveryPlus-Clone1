import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
import Divider from '@mui/material/Divider';
import AuthContext from "../Context/context";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import style from './login.css'
import { useNavigate } from "react-router-dom";
import config from "../../config/config";

export default function LoginForm() {
  let history = useNavigate()
  const { showLoginForm, setShowLoginForm , user, login} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formType, setFormType] = useState("login");
  const handleClose = () => {
    setShowLoginForm(false);
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
        <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
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
          onClick={() =>{
            login(email, password)
            // history('/home')
            // window.alert("login Successful")
          }}
        >
          Login
        </Button>
      </DialogContent>

        <Divider />
        
        <DialogContent>
          <DialogActions>
            <Button
              onClick={() =>
                setFormType(formType === "login" ? history('/register') : history('/login'))
              }
            >
              {formType === "login" ? "Sign Up" : "Login"}
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
