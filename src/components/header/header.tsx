import React from "react";
import SwitchButton from "../switchButton/switchButton";
import Icons from "../icons/icons";

interface HeaderProps {
  title?: string;
  icon?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "", icon = "" }) => {
  return (
    <header className="flex justify-between items-center py-4 px-6">
      <div className="flex items-center">
        {icon && (<Icons nameIcon={icon} />)}
        {title && <h1 className="text-xl font-bold">{title}</h1>}
      </div>
      <div>
        <SwitchButton />
      </div>
    </header>
  );
};

export default Header;
