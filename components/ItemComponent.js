import React from "react";
import styles from "../styles/itemComponent.module.css";
import { BsArrowRight } from "react-icons/bs";
import { massageData } from "@/utils/massageData";
import Buttons from "./Buttons";

const Card = ({ massage }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.name}>{massage.massageName}</h2>
            <img className={styles.line} src={massage.line} alt="" />
            <div className={styles.both}>
                <p className={styles.price}>Price: ${massage.price / 100}</p>
                <p className={styles.number}> {massage.massageNumber}</p>
            </div>
            <img src={massage.media} alt={massage.massageName} />
            <div className={styles.end}>
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
                        backgroundGradient=" linear-gradient(45deg, #059669 0%, #10b981 100%), #059669"
                        fontSize="1.2rem"
                        textColor="white"
                    />
                </div>
            </div>
        </>
    );
};

export default MassageCardList;
