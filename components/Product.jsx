import React from "react";
import styles from "../styles/product.module.css";
import Image from "next/image";
import productGirl from "@/public/images/productGirl.png";
import { Work_Sans } from "@next/font/google";
import { Playfair_Display } from "@next/font/google";

const worksans = Work_Sans({ subsets: ["latin"] });
const PlayfairDisplay = Playfair_Display({ subsets: ["latin"] });

const Product = () => {
    return (
        <div className={styles.content}>
            <div className={styles.greenDiv}></div>

            <div className={styles.left}>
                <h2 style={worksans.style} className={styles.h2}>
                    Exclusive product
                </h2>
                <h3 style={PlayfairDisplay.style} className={styles.h3}>
                    Sugar Scrubs
                </h3>
                <p style={worksans.style} className={styles.para}>
                    Sugar scrubs brighten tired, dull-looking skin to promote
                    healthy, smooth, and flawless skin. Sugar scrubs also fight
                    skin aging in a natural way.
                </p>
                <div style={worksans.style} className={styles.ingredients}>
                    <div className={styles.line1}>
                        <h1 className={styles.title}>Ingredients:</h1>
                        <span className={styles.texts}>
                            brown sugar, coconut, jojoba, olive,
                        </span>
                    </div>
                    <span className={styles.text}>almond, or grapeseed.</span>
                </div>
                <h5 style={worksans.style} className={styles.btn}>
                    View product
                </h5>
                <div className={styles.underline}></div>
            </div>
            <Image
                className={styles.girl}
                src={productGirl}
                alt="productImage"
            />
        </div>
    );
};

export default Product;
