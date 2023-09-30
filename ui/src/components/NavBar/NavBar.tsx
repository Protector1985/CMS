import React from "react";
import { Link } from "react-router-dom";
import css from "../../styles/navbar.module.css";

const NavBar: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.linkContainer}>
        <Link className={css.linkItem} to="/">
          Analytics
        </Link>
        <Link className={css.linkItem} to="/posts">
          Posts
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
