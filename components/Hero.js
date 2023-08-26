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
                    <div> You need time for perfection</div>
                </div>
                <div style={worksans.style} className={styles.buttons}>
                    <div className={styles.button1}>
                        <Buttons
                            text="Become a member"
                            backgroundGradient=" linear-gradient(0deg, #059669 0%, #36DCA5 100%);
                            "
                            fontSize="1.1rem"
                            textColor="white"
                        />
                    </div>
                    <div className={styles.button2}>
                        <Buttons
                            text="see pricing"
                            backgroundColor="white"
                            textColor="#10B981"
                            fontSize="1.1rem"
                        />
                    </div>
                </div>
            </div>

            <div style={worksans.style} className={styles.right}>
                <Image
                    className={styles.heroImg}
                    src={heroImg}
                    alt="heroImage"
                ></Image>
                <div className={styles.discountDiv}>
                    <div className={styles.Text1}>Grand Opening</div>
                    <div className={styles.Text2}>
                        All items are 25% Discount for New Member!
                    </div>
                </div>
                <div className={styles.timeDiv}>
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
    );
};

export default Hero;
