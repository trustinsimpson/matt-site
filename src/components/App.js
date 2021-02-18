import React from "react";
import Header from "./header/header";
import Navi from "./navi";
import Caro from "./carousel";
import Footer from "./footer";
import Middle from "./middle";

const App = () => {
  return (
    
    <div>
      <Navi />
      <Header />
      <Middle />
      <Caro />
      <Footer />
    </div>
  );
};

export default App;
