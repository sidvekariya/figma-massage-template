import React from "react";
import styles from "../styles/itemComponent.module.css";
import { BsArrowRight } from "react-icons/bs";
import { massageData } from "@/utils/massageData";
import Buttons from "./Buttons";
import Image from "next/image";
import { Work_Sans } from "@next/font/google";
import { Playfair_Display } from "@next/font/google";

const worksans = Work_Sans({ subsets: ["latin"] });
const PlayfairDisplay = Playfair_Display({ subsets: ["latin"] });

const Card = ({ massage }) => {
    return (
        <div className={styles.card}>
            <h2 style={PlayfairDisplay.style} className={styles.name}>
                {massage.massageName}
            </h2>
            <Image
                className={styles.line}
                src={massage.line}
                alt=""
                width={300}
                height={200}
            />
            <div style={worksans.style} className={styles.both}>
                <p className={styles.price}>Rp. {massage.price}</p>
                <p className={styles.number}> {massage.massageNumber}</p>
            </div>
            <Image
                className={styles.media}
                src={massage.media}
                alt={massage.massageName}
                width={300}
                height={200}
            />
            <div style={worksans.style} className={styles.end}>
                <div className={styles.text}>select package</div>
                <div className={styles.arrow}>
                    <BsArrowRight />
                </div>
            </div>
        </div>
    );
};

const MassageCardList = () => {
    return (
        <>
            <div className={styles.cardList}>
                {massageData.map((massage) => (
                    <Card key={massage.id} massage={massage} />
                ))}
            </div>
            <div>
                <div className={styles.serviceButton}>
                    <Buttons
                        text="More services"
                        backgroundGradient=" linear-gradient(270deg, #059669 0%, #10B981 100%);
                            "
                        fontSize="1.2rem"
                        textColor="white"
                    />
                </div>
            </div>
        </>
    );
};

export default MassageCardList;
