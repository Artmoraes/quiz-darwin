import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs } from "@fortawesome/free-brands-svg-icons";
import {
  faPerson,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

interface Props {
  nameIcon: string;
  color?: string;
  size?: string;
}

const Icons: React.FC<Props> = ({ nameIcon, color = "#E34F26", size = "2x" }) => {
  const iconMap: { [key: string]: any } = {
    HTML: faHtml5,
    CSS: faCss3,
    JavaScript: faJs,
    Accessibility: faPerson,
    Sun: faSun,
    Moon: faMoon,
  };

  const icon = iconMap[nameIcon] || faQuestionCircle;

  return <FontAwesomeIcon icon={icon} size={size} color={color} />;
};

export default Icons;
