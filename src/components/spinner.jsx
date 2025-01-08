import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Spinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Fondo semitransparente
        zIndex: 9999,
      }}
    >
      <CircularProgress size={60} thickness={5} color="primary" />
    </Box>
  );
};

export default Spinner;
