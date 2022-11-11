import React from "react";
import { useNavigate} from "react-router-dom";
import '../css/Footer.css';

const Footer = () => {

    const navigate = useNavigate();
    const AboutUs = () => {
        navigate(`/About/Us`);
    }

    return (
        <footer className="aboutUs" onClick={AboutUs}><strong>ABOUT US</strong></footer>
    )
}

export default Footer;