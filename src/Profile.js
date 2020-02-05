import React from "react";

const Profile = ({ user }) => (
  <div>
    <div className="col-md-4 mt-2">
      <div className="card" style={{ width: 18 + "rem" }}>
        <img className="card-img-top" src={user.avatar_url} />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            User: <span className=""> {user.login}</span>
          </li>
          <li className="list-group-item">
            Repositórios:
            <span className="badge badge-success"> {user.public_repos}</span>
          </li>
          <li className="list-group-item">
            Seguidores:
            <span className="badge badge-primary"> {user.followers}</span>
          </li>
          <li className="list-group-item">
            Início Github:
            <span className="badge badge-secondary"> {user.created_at}</span>
          </li>
        </ul>
        <div className="card-body">
          <a
            href="${
                user.html_url
              }"
            target="_blank"
            className="btn btn-lg btn-block btn-primary"
          >
            Ver Perfil
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
