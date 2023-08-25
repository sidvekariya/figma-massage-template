import React from "react";
import styles from "../styles/footer.module.css";
import Image from "next/image";
import logo from "@/public/images/heroLogo.png";
import { LuPhoneCall } from "react-icons/lu";
import { BsArrowRight } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <div className={styles.img}>
                        <Image src={logo}></Image>
                        <div className={styles.logoText}>The Day Beauty</div>
                    </div>
                    <div className={styles.copyright}>
                        <div>© 2021</div>
                        All right reserved.
                        <div></div>
                    </div>
                </div>
                <div className={styles.about}>
                    <h4>About</h4>
                    <div>Profile</div>
                    <div>Services</div>
                    <div>Pricing</div>
                </div>
                <div className={styles.articles}>
                    <h4>Articles</h4>
                    <div>Healthline</div>
                    <div>News</div>
                    <div>Promos</div>
                </div>
                <div className={styles.contact}>
                    <h4>Contact</h4>
                    <div className={styles.phoneNumber}>
                        <LuPhoneCall />
                        <h4>0351 2799 2331</h4>
                    </div>
                    <div className={styles.whatsapp}>
                        <BsWhatsapp />
                        <h4>0812 2000 9009</h4>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <h4>Get early promos</h4>
                <div className={styles.email}>
                    <div className={styles.emailText}>Your Email</div>
                    <BsArrowRight />
                </div>
                <div className={styles.underLine}></div>
            </div>
        </div>
    );
};

export default Footer;
