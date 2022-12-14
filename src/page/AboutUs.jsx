import React from "react";
import Navbar from "../components/Navbar";
import background from "../asset/Background.jpg";
import "../css/AboutUs.css";

const AboutUs = () => {
    return (
        <>
        <Navbar/>
            <img className="image"  src={background} alt="about us img"/>
            <p className="description" style={{padding: 20, color: "#F47181" }} >
                Find everything you want and need to know about beauty on <strong>BeautyOU</strong> Product Descripstions! We are here to be your friendly solution to all things beauty, inside and out!
                Are there beauty products that you love so much that you want to share your experience about? 
                Or are you in dilemma on which beauty products to buy for a product? <strong>BeautyOU</strong> provides a specific review page for you to do exactly that – share your opinions and find beauty solutions 
                for your problems, and make a better decision for yourself!</p>
        </>
    );
};

export default AboutUs;