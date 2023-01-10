import React, { useState, useEffect } from "react";
import "./index.css";
import { api } from "../../api";
import Repos from "../../UI/Repos";

const index = () => {
  const [repos, setRepos] = useState([]);
  const [lang, setLang] = useState([]);

  useEffect(() => {
    api.getRepo().then((repos) => {
      setRepos(repos);
    }, []);
  });

  useEffect(() => {
    let array = [];

    repos.forEach((el) => {
      if (!array.includes(el.language)) {
        array.push(el.language);
      }
    });
    setLang(array);
  }, [repos]);

  return (
    <div>
      <div className="repository">
        <input
          type="text"
          className="repo_input"
          placeholder="Find a repository ..."
        />
        <select>
          <option selected>Type</option>
          <option>All</option>
          <option>Public</option>
          <option>Private</option>
        </select>
        <select>
          <option selected>Language</option>
          <option>All</option>
          {lang.length > 0 &&
            lang.map((e) => {
              return (
                <option value={e} key={e}>
                  {e}
                </option>
              );
            })}
        </select>
        <select>
          <option selected>Sort</option>
          <option>Name</option>
          <option>Stars</option>
        </select>
        <button className="new">
          <i class="bi bi-journal-bookmark"></i>
          New
        </button>
      </div>
      <hr className="line_repo" />
      <div className="repos_wrap">
        {repos.map((el) => {
          return (
            <Repos
              title={el.name}
              link={el.clone_url}
              public={el.visibility}
              language={el.language}
            />
          );
        })}
      </div>
    </div>
  );
};

export default index;
