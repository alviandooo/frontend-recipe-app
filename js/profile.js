const changeProfile = () => {
  let elementName = document.querySelector(".profile-name");
  let elementChangeProfile = document.querySelector(".change-profile");
  let checkDisplay = elementChangeProfile.style.display == "block";
  if (checkDisplay) {
    elementChangeProfile.style.display = "none";
    elementName.style.display = "block";
  } else {
    elementChangeProfile.style.display = "block";
    elementName.style.display = "none";
  }
};
