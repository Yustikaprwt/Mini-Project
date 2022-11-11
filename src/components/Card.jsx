import React from "react";
import lips from "../asset/Lipstick.jpeg";
import eyes from "../asset/Eyes.jpg";
import face from "../asset/Face.jpg";
import cheeks from "../asset/Cheeks.jpg";
import { useNavigate } from "react-router-dom";
import '../css/Card.css';

const Card = () => {

    const navigate= useNavigate();
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
    
    return (
        <div>
            <div className="home" 
                style={{display: "flex", 
                        flexDirection: "row", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        marginTop: 170}}>

                <div className="home-card text-center">
                    <img onClick={LipsDetailPage} 
                        className="home-image" 
                        style={{
                            height: "160px", 
                            padding: "5px", 
                            marginTop: "35px"
                            }} 
                        src={lips}/>
                    <p className="home-title" 
                        onClick={LipsDetailPage}>
                        <strong>LIPS</strong></p>
                </div>

                <div className="home-card text-center">
                    <img onClick={FaceDetailPage} 
                        className="home-image" 
                        style={{
                            height: "160px", 
                            padding: "5px", 
                            marginTop: "35px"
                            }} 
                        src={face}/>
                    <p className="home-title" 
                        onClick={FaceDetailPage}>
                        <strong>FACE</strong></p>
                </div>

                <div className="home-card text-center">
                    <img onClick={CheeksDetailPage} 
                        className="home-image" 
                        style={{
                            height: "160px", 
                            padding: "5px", 
                            marginTop: "35px"
                            }} 
                        src={cheeks}/>
                    <p className="home-title" 
                        onClick={CheeksDetailPage}>
                        <strong>CHEEKS</strong></p>
                </div>

                <div className="home-card text-center">
                    <img onClick={EyesDetailPage} 
                        className="home-image" 
                        style={{
                            height: "160px", 
                            padding: "5px", 
                            marginTop: "35px"
                            }} 
                        src={eyes}/>
                    <p className="home-title" 
                        onClick={EyesDetailPage}>
                        <strong>EYES</strong></p>
                </div>
            </div>
        </div>
    );
};

export default Card;