import React from "react";
import {Button} from "@mui/material"

export default function Buttons({title}) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#FF9F0D",
        width: "190px",
        height: "60px",
        borderRadius: "30px",
      }}
    >
      {title}
    </Button>
  );
}
