import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Repo from "./Repo";
import Member from "./Member";

const clientid = "1433cb81dcde3da81dff";
const clientsecret = "c8c4f1d35a39c5b9240aa75ba38eb30ccef733df";

class App extends Component {
  constructor() {
    super();
    this.state = {
      github: {
        url: "https://api.github.com/users",
        count: "8",
        sort: "created_at: asc"
      },
      user: [],
      repos: [],
      members: []
    };
  }

  getUser = e => {
    const user = e.target.value;

    const { url, count, sort } = this.state.github;

    axios
      .get(
        `https://api.github.com/orgs/grupotesseract/public_members?client_id=${clientid}&client_secret=${clientsecret}`
      )
      .then(({ data }) => {
        this.setState({ members: data });
      });

    axios
      .get(`${url}/${user}?client_id=${clientid}&client_secret=${clientsecret}`)
      .then(({ data }) => {
        this.setState({ user: data });
      });

    axios
      .get(
        `${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${clientid}&client_secret=${clientsecret}`
      )
      .then(({ data }) => {
        this.setState({ repos: data });
      });
  };

  handlerShowMember = user => {
    this.setState({ user });
  };

  renderProfile = () => {
    const { user, repos, members } = this.state;
    return (
      <div className="row">
        <div className="col md-4">
          {members.map(member => (
            <Member
              key={member.id}
              member={member}
              onShowMember={this.handlerShowMember}
            />
          ))}
        </div>
        <div className="col md-4">
          <Profile user={user} />
        </div>
        <div className="col md-4">
          {repos.map(repo => (
            <Repo key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="card card-body mt-2">
            <h1>Pesquisar Usuário</h1>
            <p className="lead">Digite o nome a ser pesquisado:</p>
            <input
              onChange={this.getUser}
              id="search"
              type="text"
              className="form-control"
              required
            ></input>
          </div>
          {this.state.user.length !== 0 ? this.renderProfile() : null}
        </div>
      </div>
    );
  }
}

export default App;
