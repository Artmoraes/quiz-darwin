import React from "react";
import SwitchButton from "../switchButton/switchButton";
import Icons from "../icons/icons";
import "./header.css";

interface HeaderProps {
  title?: string;
  icon?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "", icon = "" }) => {
  return (
    <header className="py-1 px-6 bg-slate-200 w-full mt-8 h-14">
      <div
        id="container-icon-button"
        className="header-flex flex justify-between items-center"
      >
        <div className="flex items-center mx-2 space-x-6">
          {icon && (
            <div className="container-icon-header flex justify-center items-center rounded-lg w-12 h-12">
              {icon && <Icons nameIcon={icon} />}
            </div>
          )}
          {title && (
            <h1 className="text-2xl font-medium text-left tracking-tight leading-tight font-rubik">
              {title}
            </h1>
          )}
        </div>
        <div className="header-btn mx-2">
          <SwitchButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
