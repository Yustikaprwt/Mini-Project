import React from "react";
import './HomePage.css';
import lips from "../asset/Lips.jpg";
import eyes from "../asset/Eyes.jpg";
import face from "../asset/Face.jpg";
import cheeks from "../asset/Cheeks.jpg";
import { useNavigate } from "react-router-dom";
import { GiLipstick } from 'react-icons/gi';

const HomePage = () => {

    const navigate= useNavigate();
    const SignOut = () => {
        navigate(`/`);
    }
    const AboutUs = () => {
        navigate(`/About/Us`);
    }
    const LipsDetailPage = () => {
        navigate(`/Lips/Detail`);
    }
    const FaceDetailPage = () => {
        navigate(`/Face/Detail`);
    }
    const CheeksDetailPage = () => {
        navigate(`/Cheeks/Detail`);
    }
    const EyesDetailPage = () => {
        navigate(`/Eyes/Detail`);
    }

    return(
        <div className="navbar"  style={{display: "flex", flexDirection: "column", height: "100%"}}>
            <ul>
                <li style={{color: "#F47181", fontSize: "30px"}}><strong>BEAUTY</strong><span>OU</span><GiLipstick /></li>
                    <input type="text" placeholder="Search..." style={{width: "250px", height:35, borderRadius: 3, fontSize: "15px" ,backgroundColor: "#E1E7EC", border: "none", textAlign: "left", paddingLeft: "10px"}}/>
                <li onClick={SignOut} style={{color: "#7D8D9C", fontSize: "15px", marginRight: "50px"}}>Sign Out</li>
            </ul>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 170}}>
                <div className="card">
                    <div className="card-image">
                    <img src={lips} alt="lips option"/>
                </div>
                <div className="card-title">
                    <p onClick={LipsDetailPage} ><strong>LIPS</strong></p>
                </div>
            </div>
            <div className="card">
                    <div className="card-image">
                    <img src={face} alt="face option"/>
                </div>
                <div className="card-title">
                    <p onClick={FaceDetailPage} ><strong>FACE</strong></p>
                </div>
            </div>
            <div className="card">
                    <div className="card-image">
                    <img src={cheeks} alt="cheeks option"/>
                </div>
                <div className="card-title">
                    <p onClick={CheeksDetailPage} ><strong>CHEEKS</strong></p>
                </div>
            </div>
            <div className="card">
                    <div className="card-image">
                    <img src={eyes} alt="eyes option"/>
                </div>
                <div className="card-title">
                    <p onClick={EyesDetailPage} ><strong>EYES</strong></p>
                </div>
            </div>
        </div>
        <footer onClick={AboutUs}>
            <strong>ABOUT US</strong>
        </footer>
</div>
    )
}

export default HomePage;