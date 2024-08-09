import React, { useEffect } from "react";

export default function Nav(props) {
  function handleContact() {
    props.setRenderMain((pre) => !pre);
  }
  console.log(props.render);
  return (
    <div>
      <nav className="nav-bar">
        <h1 className="logo">Recipe.np</h1>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#" 
            onClick={handleContact}
            >
              Contact Us
            </a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
