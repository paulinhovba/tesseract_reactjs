import React from "react";

const Repo = ({ repo }) => (
  <div className="card card-body mt-2">
    <div className="col-md-12 mt-2">
      <a href={repo.html_url} target="_blank">
        {repo.name}
      </a>
    </div>
    <div className="col-md-12 mt2">
      <span className="badge badge-primary">
        Stars: {repo.stargazers_count}
      </span>
      <span className="badge badge-primary">Watchers: {repo.watchers}</span>
      <span className="badge badge-primary">Forks: {repo.forks}</span>
    </div>
  </div>
);

export default Repo;
