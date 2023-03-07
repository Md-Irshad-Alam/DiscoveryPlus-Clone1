import React, { useContext, useEffect, useState } from "react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardContent from "@mui/material/CardContent";
import AuthContext from "../Context/context";
import { Button } from "@chakra-ui/react";
import style from './login.css'
import { Navbar } from "../LandingPage/navbar";

export default function AccountDetailsCard() {
  const [User, setUser] = useState("");
  const {user , name} = useContext(AuthContext)
  // console.log(user.data.name);

  // console.log(User)

  if (!user) return "";

  return (
 
    <div className="userInfo">
      <Navbar user={name}/>
     <span>{name}</span>
    </div>
  );
}
