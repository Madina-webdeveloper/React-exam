import React from "react";
import "./index.css";

const index = (repos) => {
  return (
    <>
      <div className="repos">
        <div className="repos_title">
          {" "}
          <a href={repos.link} className="repos_link">
            {repos.title}
          </a>{" "}
          <p className="repos_public">{repos.public}</p>{" "}
        </div>

        <p className="repos_p">
          <span
            className={`language  ${
              repos.language === "JavaScript"
                ? "yellow"
                : repos.language === "HTML"
                ? "red"
                : repos.language === "CSS"
                ? "purple"
                : ""
            }`}
          ></span>
          {repos.language}
        </p>
      </div>
      <hr />
    </>
  );
};

export default index;
