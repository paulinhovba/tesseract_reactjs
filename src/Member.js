import React from "react";

const Member = ({ member, onShowMember }) => (
  <div className="card card-body mt-2">
    <div className="row justify-content-center align-items-center">
      <div
        id="member"
        className="col-md-12"
        onClick={() => onShowMember(member)}
        style={{ cursor: "pointer" }}
      >
        {member.login}
        <img
          className="img-thumbnail"
          heigth="50"
          width="50"
          align="right"
          src={member.avatar_url}
        />
      </div>
    </div>
  </div>
);

export default Member;
