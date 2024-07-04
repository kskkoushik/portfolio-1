import React from "react"

const TabButton = ({ active, selectTab, children}) => {

const buttonClasses = active ? 'text-[#4F6F52] border-b border-purple-500' : 'text-[#4F6F52]'
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-medium hover:text-black ${buttonClasses}`}>
            {children}
        </p>
    </button>
  );
};

export default TabButton;

