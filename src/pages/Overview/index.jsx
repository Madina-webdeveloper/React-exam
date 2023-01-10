import React, { useEffect, useState } from "react";
import OverviewCard from "../../UI/OverviewCard";
import { api } from "../../api";
import "./index.css";

const index = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    api.getRepo().then((repos) => {
      setRepos(repos);
    }, []);
  });

  return (
    <>
    <div className="over_title">
      <p className="over_t">Popular repositories</p>

      <p className="over_custom">Customize your pins</p>
    </div>
      <div className="overviews">
        {repos.map((e) => {
          return (
            <OverviewCard
              key={e.id}
              title={e.name}
              link={e.clone_url}
              public={e.visibility}
              language={e.language}
            />
          );
        })}
      </div>
    </>
  );
};

export default index;
