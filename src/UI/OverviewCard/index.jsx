import React from "react";
import "./index.css"

const index = (repos) => {
  return (
    <div className="overview">
      <div className="overview_title">
        {" "}
        <a href={repos.link} className="repos_link">{repos.title}</a>{" "}
        <p className="overview_public">{repos.public}</p>{" "}
      </div>

      <p className="overview_p">
        <span className={`language  ${
          repos.language === "JavaScript"
            ? "yellow"
            : repos.language === "HTML"
            ? "red"
            : repos.language === "CSS"
            ? "purple"
            : ""
        }`} ></span>
        {repos.language}
      </p>
    </div>
  );
};

export default index;
