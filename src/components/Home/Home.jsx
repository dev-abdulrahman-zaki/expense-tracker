import React, { useState } from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useEffect } from "react";

function Home() {
  const [data, setData] = useState([]);
  function getData() {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }

  useEffect(
    () => {
      getData();
    },
    []
    // [data]
  );

  function deleteData(id) {
    fetch(`http://localhost:3000/data/${id}`, {
      method: "DELETE",
    });
    const newArr = data.filter((e) => {
      return e.id !== id;
    });
    setData(newArr);
  }
  let totalPrice = 0;
  return (
    <Box>
      {data.map((e) => {
        totalPrice += e.price;
        return (
          <Paper
            key={e.id}
            sx={{
              position: "relative",
              width: "366px",
              display: "flex",
              justifyContent: "space-between",
              mt: "22px",
              pt: "27px",
              pb: "7px",
            }}
          >
            <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h6">
              {e.title}
            </Typography>
            <Typography
              sx={{
                mr: "33px",
                fontWeight: 500,
                fontSize: "1.4em",
                opacity: "0.8",
              }}
              variant="h6"
            >
              ${e.price}
            </Typography>

            <IconButton
              sx={{ position: "absolute", top: "0", right: "0" }}
              onClick={() => {
                deleteData(e.id);
              }}
            >
              <Close sx={{ fontSize: "20px" }} />
            </IconButton>
          </Paper>
        );
      })}

      <Typography mt="35px" textAlign="center" variant="h6">
        👉 Total: ${totalPrice}
      </Typography>
    </Box>
  );
}

export default Home;
