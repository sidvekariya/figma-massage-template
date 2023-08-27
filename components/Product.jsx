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
            <div className={styles.lightGreen}>
                <div style={worksans.style} className={styles.h2}>
                    Exclusive product
                </div>
                <div style={PlayfairDisplay.style} className={styles.h3}>
                    Sugar Scrubs
                </div>
                <p style={worksans.style} className={styles.para}>
                    Sugar scrubs brighten tired, dull-looking skin to promote
                    healthy, smooth, and flawless skin. Sugar scrubs also fight
                    skin aging in a natural way.
                </p>
                <div style={worksans.style} className={styles.ingredients}>
                    <div className={styles.title}>
                        <span className={styles.bold}>Ingredients:</span> brown
                        sugar, coconut, jojoba, olive, almond, or grapeseed.
                    </div>
                </div>
                <h5 style={worksans.style} className={styles.btn}>
                    View product
                </h5>
                <div className={styles.underline}></div>
            </div>

            <div className={styles.greenDiv}>
                <div className={styles.div}></div>
                <Image
                    className={styles.girl}
                    src={productGirl}
                    alt="productImage"
                />
            </div>
        </div>
    );
};

export default Product;
