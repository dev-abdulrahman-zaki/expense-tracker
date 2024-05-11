import React, { useState } from "react";
import { ChevronRight } from "@mui/icons-material";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  function addData(){
    fetch("http://localhost:3000/data", {
      method: "POST",
      headers: {"Content-Type": "application/json",},      
      body: JSON.stringify({ price, title }),
    }).then(() => {
      navigate("/");
      setTitle("");
      setPrice(0);
    })
  }
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "380px" }} component="form">
      <TextField
        fullWidth={true}
        label="Description"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start"><CreateIcon fontSize="small"/></InputAdornment>,
        }}
        variant="filled"
        onChange={(e)=>{setTitle(e.target.value)}}
        defaultValue={title}
      />

      <TextField
        fullWidth={true}
        label="Amount"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">< AttachMoneyIcon fontSize="small"/></InputAdornment>,
        }}
        variant="filled"
        type="number"
        onChange={(e)=>{setPrice(Number(e.target.value))}}
        defaultValue={price}
      />

      <Button
        sx={{
          mt: "22px",
          textTransform: "capitalize",
          "& .MuiButton-endIcon": {
            marginLeft: "4px",
          },
        }}
        onClick={()=>{addData()}}
        variant="contained"
        endIcon={<ChevronRight />}
      >
        Submit
      </Button>
    </Box>
  );
}
