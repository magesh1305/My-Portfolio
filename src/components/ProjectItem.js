import React from "react";

function ProjectItem({ image, name, id }) {
  const handleClickProject = () => {
    if (id === 0) {
      window.open("https://react-todo-app-lac.vercel.app/", "_self");
    }
    if (id === 1) {
      window.open("https://react-ecommerce-app-fawn.vercel.app/", "_self");
    }
    if (id === 2) {
      window.open("https://blackjack-game-flax.vercel.app/", "_self");
    }
  };
  return (
    <div className="projectItem" onClick={() => handleClickProject()}>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItem;
