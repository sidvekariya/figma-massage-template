import React from "react";
import MassageCardList from "./ItemComponent";
import Hero from "./Hero";

const HomePage = () => {
    return (
        <div className="app">
            <Hero />
            <MassageCardList />
        </div>
    );
};

export default HomePage;
