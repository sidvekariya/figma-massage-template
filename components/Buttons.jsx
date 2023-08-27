import React from "react";
import styles from "../styles/button.module.css";

import { Work_Sans } from "@next/font/google";
import { Playfair_Display } from "@next/font/google";

const worksans = Work_Sans({ subsets: ["latin"] });
const PlayfairDisplay = Playfair_Display({ subsets: ["latin"] });

const Buttons = ({ text, backgroundColor }) => {
    return (
        <button
            style={worksans.style}
            className={`${styles.button} ${
                backgroundColor === "green" ? styles.green : styles.white
            }`}
        >
            {text}
        </button>
    );
};

export default Buttons;
