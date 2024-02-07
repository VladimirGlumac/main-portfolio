import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white"
    : "text-[#f96d00] border-[#393e46] hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 hover:border-white px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
