import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Headers";

const HomepageLayout = (props) => {
  return (
    <div>
      <Header {...props} />
      {props.children}
      <Footer />
    </div>
  );
};

export default HomepageLayout;
