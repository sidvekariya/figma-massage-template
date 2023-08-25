import React from "react";
import MassageCardList from "./ItemComponent";
import Hero from "./Hero";
import Product from "./Product";
import Footer from "./Footer";

const HomePage = () => {
    return (
        <div className="app">
            <Hero />
            <MassageCardList />
            <Product />
            <Footer />
        </div>
    );
};

export default HomePage;
