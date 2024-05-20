import React from "react"

const TabButton = ({ active, selectTab, children}) => {

const buttonClasses = active ? 'text-[#33698d] border-b border-purple-500' : 'text-[#35576e]'
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-medium hover:text-black ${buttonClasses}`}>
            {children}
        </p>
    </button>
  );
};

export default TabButton;

