import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();

  const handleClickProject = () => {
    if (id === 0) {
      window.open("https://react-todo-app-lac.vercel.app/", "_self");
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
