import React from "react";
import styles from "../styles/hero.module.css";
import Image from "next/image";
import heroLogo from "@/public/images/heroLogo.png";
import heroImg from "@/public/images/heroImg.png";
import Buttons from "./Buttons";
import { Work_Sans } from "@next/font/google";
import { Playfair_Display } from "@next/font/google";

const worksans = Work_Sans({ subsets: ["latin"] });
const PlayfairDisplay = Playfair_Display({ subsets: ["latin"] });

const Hero = () => {
    return (
        <div className={styles.heroContent}>
            <div className={styles.left}>
                <div className={styles.logoText}>
                    <Image className={styles.logo} src={heroLogo} alt="logo" />
                    <div style={worksans.style} className={styles.text}>
                        The Day Beauty
                    </div>
                </div>
                <div style={PlayfairDisplay.style} className={styles.title}>
                    Be <span className={styles.greenText}>Beautiful</span>
                    <div> You need time for Perfection</div>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.button1}>
                        <Buttons
                            text="Become a member"
                            backgroundColor="green"
                        />
                    </div>
                    <div className={styles.button2}>
                        <Buttons text="See pricing" backgroundColor="white" />
                    </div>
                </div>
            </div>

            <div style={worksans.style} className={styles.right}>
                <Image
                    className={styles.heroImg}
                    src={heroImg}
                    alt="heroImage"
                ></Image>

                <div style={worksans.style} className={styles.discountDiv}>
                    <div className={styles.text1}>Grand Opening</div>
                    <div className={styles.text2}>
                        All items are 25% Discount for New Member!
                    </div>
                </div>
                <div style={worksans.style} className={styles.timeDiv}>
                    <div className={styles.times}>
                        <div className={styles.first}>
                            <div className={styles.time}>20</div>
                            <div className={styles.timeText}>hours</div>
                        </div>
                        <div className={styles.colon}>:</div>
                        <div className={styles.first}>
                            <div className={styles.time}>10</div>
                            <div className={styles.timeText}>minutes</div>
                        </div>
                        <div className={styles.colon}>:</div>
                        <div className={styles.first}>
                            <div className={styles.time}>05</div>
                            <div className={styles.timeText}>seconds</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
