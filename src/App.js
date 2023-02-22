import React from "react";
import Button from "@mui/material/Button";

const App = () => {
  return (
    <div>
      <Button
        variant="outlined"
        color="warning"
        size="large"
        onClick={() => console.log("Clicked")}
      >
        Click Here
      </Button>
    </div>
  );
};

export default App;
