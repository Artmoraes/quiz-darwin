import React, { useState } from "react";
import "./switchButton.css";
import Icons from "../icons/icons";

const SwitchButton: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("option1");

  const handleToggleOption = () => {
    setSelectedOption((prevOption) =>
      prevOption === "option1" ? "option2" : "option1"
    );
  };

  return (
    <div className="flex items-center">
      <div className="flex mx-1">
        <Icons nameIcon={"Sun"} color={"#626C7F"} size="lg" />
      </div>
      <div className="onoffswitch">
        <input
          type="checkbox"
          name="onoffswitch"
          className="onoffswitch-checkbox"
          id="myonoffswitch"
          tabIndex={0}
          checked={selectedOption === "option2"}
          onChange={handleToggleOption}
        />
        <label className="onoffswitch-label" htmlFor="myonoffswitch"></label>
      </div>
      <div className="flex mx-1">
      <Icons nameIcon={"Moon"} color={"#626C7F"} size="lg" />
      </div>
    </div>
  );
};

export default SwitchButton;
