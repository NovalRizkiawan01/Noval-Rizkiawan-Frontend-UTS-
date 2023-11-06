import React from 'react';
import maskot from "../LOGO-GRISAWANGI.png";
const Header = () => {
    return (
<>
  <nav className="navbar bg-body-tertiary primary">
    <div className="container-fluid">
      <a className="navbar-brand">
        <img style={{marginRight : "20px"}} src={maskot} alt="Logo" width={110} height={130}  className="d-inline-block align-text-top" />
        
      </a>
    </div>
  </nav>
</>

    );
}

export default Header;
