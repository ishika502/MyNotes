import React from "react";
import logo from "./images/logo.jpg";

const Header=()=>{
return( <>
<div className="header">
<h1> MyNotes</h1>
      <img src={logo} alt="logo" />
</div>

</>
);
};

export default Header;