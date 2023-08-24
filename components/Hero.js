import React from "react";
import styles from "../styles/hero.module.css";
import Image from "next/image";
import heroLogo from "@/public/images/heroLogo.png";
import heroImg from "@/public/images/heroImg.png";
import Buttons from "./Buttons";

const Hero = () => {
    return (
        <div className={styles.heroContent}>
            <div className={styles.left}>
                <div className={styles.logoText}>
                    <Image
                        className={styles.heroLogo}
                        src={heroLogo}
                        alt="logo"
                    />
                    <div className={styles.text}>The Day Beauty</div>
                </div>
                <div className={styles.title}>
                    <div className={styles.heroTitle1}>
                        Be <span className={styles.greenText}>Beautiful</span>
                    </div>
                    <div className={styles.heroTitle2}>
                        You need time for perfection
                    </div>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.button1}>
                        <Buttons
                            text="Become a member"
                            backgroundGradient=" linear-gradient(45deg, #059669 0%, #10b981 100%), #059669"
                            fontSize="1.2rem"
                            textColor="white"
                        />
                    </div>
                    <div className={styles.button2}>
                        <Buttons
                            text="see pricing"
                            backgroundColor="white"
                            textColor="green"
                            fontSize="1.2rem"
                        />
                    </div>
                </div>
            </div>

            <div className={styles.right}>
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
