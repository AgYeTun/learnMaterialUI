import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Grid container>
      <Navbar />
      <Outlet />
    </Grid>
  );
};

export default App;
