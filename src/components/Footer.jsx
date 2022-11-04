import React from "react";
import { useNavigate} from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();
    const AboutUs = () => {
        navigate(`/About/Us`);
    }

    return (
        <footer onClick={AboutUs}><strong>ABOUT US</strong></footer>
    )
}

export default Footer;