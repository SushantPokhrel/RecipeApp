import React, { useState } from "react";

export default function Nav(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleContact() {
    props.setRenderMain((pre) => !pre);
  }

  function handleNavBar() {
    setIsOpen((pre) => !pre);
  }

  return (
    <div>
      <nav className="nav-bar">
        <h1 className="logo" onClick={()=>location.reload()}>Recipe.np</h1>
        <ul className={isOpen ? "sm-ul" : ""}>
          <span className="cross-icon" onClick={()=>setIsOpen(pre=>!pre)}>X</span>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#" onClick={handleContact}>
              Contact Us
            </a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
        <div className="hamburger" onClick={handleNavBar}>
          <button className="btn-bars">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
        </div>
      </nav>
    </div>
  );
}
