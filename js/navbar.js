window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  let element = document.querySelector("#navbar");
  if (scroll > 50) {
    element.style.background = "#efc81a";
  } else {
    element.style.background = "";
  }
});
