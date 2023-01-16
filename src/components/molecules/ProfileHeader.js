import React from "react";
import { useSelector } from "react-redux";

function ProfileHeader() {
  const user = useSelector((state) => state.auth);

  const changeProfile = () => {
    let elementName = document.querySelector(".profile-name");
    let elementChangeProfile = document.querySelector(".change-profile");
    let checkDisplay = elementChangeProfile.style.display === "block";
    if (checkDisplay) {
      elementChangeProfile.style.display = "none";
      elementName.style.display = "block";
    } else {
      elementChangeProfile.style.display = "block";
      elementName.style.display = "none";
    }
  };

  return (
    <div className="profile">
      <div className="profile-photo">
        <img
          src={user?.data?.photo}
          className="rounded-circle"
          width="120px"
          alt=""
        />
        <a href="#/" onClick={changeProfile}>
          <img src="./images/icon-edit.webp" alt="" className="icon-edit" />
        </a>
      </div>
      <div className="profile-name mt-2">
        <p>{user?.data?.name}</p>
      </div>
      <div className="change-profile mt-4">
        <div className="btn-group-vertical">
          <button
            className="btn btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Change Profile
          </button>
          <button className="btn btn-secondary">Change Password</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
