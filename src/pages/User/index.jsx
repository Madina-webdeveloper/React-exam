import React from "react";
import {Routes, Route} from "react-router-dom";
import Overview from "../Overview";
import Repository from "../Repository";
import Followers from "../Followers";
import UserProfile from "../UserProfile";
import Following from "../Following";
import "./index.css";

const index = () => {
 
  return (
    <>
      <div className="container user_r">
       <UserProfile/>
        <div className="right">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/repositories" element={<Repository />} />
            <Route path="/followers" element={<Followers />}></Route>
            <Route path="/following" element={<Following />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default index;
