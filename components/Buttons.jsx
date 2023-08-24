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
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: fontSize,
    };

    return <button style={buttonStyle}>{text}</button>;
};

export default Buttons;
