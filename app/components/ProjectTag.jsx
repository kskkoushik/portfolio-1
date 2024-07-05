import React from "react";

const ProjectTag = ({ name, onClick, isSelected}) => {
  const buttonStyles = isSelected
  ? "text-black border-[#4F6F52] hover:text-[#4F6F52] hover:border-black"
  : "text-[#4F6F52] border-black hover:border-[#4F6F52] hover:text-black"
    return (
    <button 
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer hover:border-[#E8DFCA] hover:text-black`}
      onClick={() => onClick(name)}>
      {name}
    </button>    
  );
};

export default ProjectTag;
