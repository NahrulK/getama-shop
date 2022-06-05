import React from "react";
import { Button } from "react-bootstrap";

const Buttonnya = ({ children, ...otherProps }) => {
  return (
    <Button
      className="shadow btn btn-google btn-outline ms-6 btn-dark"
      variant="dark"
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default Buttonnya;
