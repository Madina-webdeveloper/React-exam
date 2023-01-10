import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { api } from "../../api";
import "./index.css";

const index = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    api.getUser().then((user) => {
      setUser(user);
    }, []);
  });
  return (
    <>
      <div className="container main">
        <div className="main_nav">
          <div className="main_nav_ul">
            <li>
              <NavLink
                to="/"
                className={` main_nav_ul_li ${({ isActive }) => {
                  isActive ? "link" : "";
                }} `}
              >
                <i class="bi bi-book"></i>
                Overview
              </NavLink>
            </li>
            <li >
              <NavLink
                to="/repositories"
                className={`main_nav_ul_li ${({ isActive }) => {
                  isActive ? "link" : "";
                }}  `}
              >
                <i class="bi bi-journal-bookmark"></i>
                Repositories <span className="count">{user.public_repos}</span>
              </NavLink>
            </li>
            <li className="main_nav_ul_li">
              <i class="fa-solid fa-list-check"></i>
              Projects
            </li>
            <li className="main_nav_ul_li">
              <i class="bi bi-box"></i>
              Packages
            </li>
            <li className="main_nav_ul_li">
              <i class="bi bi-star"></i>
              Stars
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
