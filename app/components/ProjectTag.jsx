import React from "react";

const ProjectTag = ({ name, onClick, isSelected}) => {
  const buttonStyles = isSelected
  ? "text-black border-[#33698d] hover:text-[#33698d] hover:border-black"
  : "text-[#33698d] border-black hover:border-[#33698d] hover:text-black"
    return (
    <button 
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer hover:border-white hover:text-white`}
      onClick={() => onClick(name)}>
      {name}
    </button>    
  );
};

export default ProjectTag;
