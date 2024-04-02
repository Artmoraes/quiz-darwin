import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import sunny from "../../assets/images/sunny.svg";
import moon from "../../assets/images/moon.svg";
import html from "../../assets/images/html.svg";
import css from "../../assets/images/css.svg";
import javascript from "../../assets/images/javascript.svg";
import accessibility from "../../assets/images/accessibility.svg";

interface Props {
  nameIcon: string;
  color?: string;
  size?: string;
}

const Icons: React.FC<Props> = ({
  nameIcon,
  color = "#E34F26",
  size = "2x",
}) => {
  const iconMap: { [key: string]: JSX.Element } = {
    HTML: <img src={html} alt="HTML" />,
    CSS: <img src={css} alt="CSS" />,
    JavaScript: <img src={javascript} alt="JavaScript" />,
    Accessibility: <img src={accessibility} alt="Accessibility" />,
    Moon: <img src={moon} alt="Moon" />,
    Sunny: <img src={sunny} alt="Sunny" />,
  };

  const icon = iconMap[nameIcon] || <FontAwesomeIcon icon={faQuestionCircle}  size={size} color={color} />;

  return <div style={{ color, fontSize: size }}>{icon}</div>;
};

export default Icons;
