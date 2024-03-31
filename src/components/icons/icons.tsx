import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs } from "@fortawesome/free-brands-svg-icons";
import { faPerson, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

interface Props {
  nameIcon: string;
}

const Icons: React.FC<Props> = ({ nameIcon }) => {
  const iconMap: { [key: string]: any } = {
    HTML: faHtml5,
    CSS: faCss3,
    JavaScript: faJs,
    Accessibility: faPerson,
  };

  const icon = iconMap[nameIcon] || faQuestionCircle;

  return <FontAwesomeIcon icon={icon} size="2x" color="#E34F26" />;
};

export default Icons;
