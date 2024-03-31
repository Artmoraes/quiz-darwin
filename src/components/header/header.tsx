import React from "react";
import SwitchButton from "../switchButton/switchButton";

interface HeaderProps {
  title?: string;
  icon?: JSX.Element;
}

const Header: React.FC<HeaderProps> = ({ title = "", icon }) => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-gray-800 text-white">
      <div className="flex items-center">
        {icon && (
          <div className="mr-4 flex flex-wrap content-center justify-center h-screen" style={{ width: "56px", height: "56px", backgroundColor: "#F6E7FF" }}>
            {icon}
          </div>
        )}
        {title && <h1 className="text-xl font-bold">{title}</h1>}
      </div>
      <div>
        <SwitchButton />
      </div>
    </header>
  );
};

export default Header;
