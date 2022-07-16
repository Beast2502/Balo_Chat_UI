import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  // json format data rendering

  // TODO MOVE TO CONSTANT FILE
  const header = [
    {
      path: "/",
      img: "Home",
    },
    {
      path: "/filter",
      img: "search",
    },
    {
      path: "/search",
      img: "search",
    },
  ];

  return (
    <div style={{ position: "fixed", bottom: 0, background: 'black', width: '100%', display: 'flex', justifyContent: 'space-evenly', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', maxWidth: '600px' }}>
      {header.map((data) => (
        <NavLink className="nav_link nav_item" to={data.path}>
          <img height="28px" width="28px" src={require(`./icons/${data.img}.svg`)} alt="image" />
        </NavLink>
      ))}
    </div>
  );
};

export default Header;
