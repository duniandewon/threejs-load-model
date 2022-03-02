import "./style.scss";

import Three from "./src/Three";

const file = document.querySelector("#profile-picture");
const sceneContainer = document.querySelector(".scene");

const three = new Three(
  sceneContainer.clientWidth,
  sceneContainer.clientHeight
);

// file.addEventListener("change", () => {
//   const url = file.files[0];

//   const model = URL.createObjectURL(url);
// });
