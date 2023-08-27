import React from "react";
import styles from "../styles/footer.module.css";
import Image from "next/image";
import logo from "@/public/images/heroLogo.png";
import { HiOutlinePhone } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { Work_Sans } from "@next/font/google";

const worksans = Work_Sans({ subsets: ["latin"] });

const Footer = () => {
    return (
        <div style={worksans.style} className={styles.footer}>
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
                    <div className={styles.h4}>About</div>
                    <div>Profile</div>
                    <div>Services</div>
                    <div>Pricing</div>
                </div>
                <div className={styles.articles}>
                    <div className={styles.h4}>Articles</div>
                    <div>Healthline</div>
                    <div>News</div>
                    <div>Promos</div>
                </div>
                <div className={styles.contact}>
                    <div className={styles.h4}>Contact</div>
                    <div className={styles.phoneNumber}>
                        <HiOutlinePhone />
                        <div> (0351) 2799 2331</div>
                    </div>
                    <div className={styles.whatsapp}>
                        <BsWhatsapp />
                        <div>0812 2000 9009</div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.h4}>Get early promos</div>
                <div className={styles.email}>
                    <div className={styles.emailText}>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="YOUR EMAIL"
                        />
                    </div>
                    <BsArrowRight />
                </div>
                <div className={styles.underLine}></div>
            </div>
        </div>
    );
};

export default Footer;
