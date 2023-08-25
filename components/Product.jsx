import React from "react";
import styles from "../styles/product.module.css";
import Image from "next/image";
import productGirl from "@/public/images/productGirl.png";

const Product = () => {
    return (
        <div className={styles.content}>
            <div className={styles.greenDiv}></div>
            {}{" "}
            <div className={styles.left}>
                <h2 className={styles.h2}>Exclusive product</h2>
                <h3 className={styles.h3}>Sugar Scrubs</h3>
                <p className={styles.para}>
                    Sugar scrubs brighten tired, dull-looking skin to promote
                    healthy, smooth, and flawless skin. Sugar scrubs also fight
                    skin aging in a natural way.
                </p>
                <div className={styles.ingredients}>
                    <h1 className={styles.title}>Ingredients:</h1>
                    <span className={styles.texts}>
                        brown sugar, coconut, jojoba, olive, almond, or
                        grapeseed.
                    </span>
                </div>
                <h5 className={styles.btn}>View product</h5>
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
