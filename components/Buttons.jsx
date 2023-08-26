import React from "react";

const Buttons = ({
    text,
    backgroundColor,
    textColor,
    backgroundGradient,
    fontSize,
}) => {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        background: backgroundGradient,
        color: textColor,
        padding: "0.8rem 1.75rem",
        border: "none",
        cursor: "pointer",
        fontSize: fontSize,
    };

    return <button style={buttonStyle}>{text}</button>;
};

export default Buttons;
