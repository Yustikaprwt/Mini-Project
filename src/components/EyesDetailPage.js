import React from "react";
import { Button } from "react-bootstrap";
import { GiLipstick } from 'react-icons/gi';
import { useNavigate } from "react-router-dom";

const EyesDetailPage = () => {

    const navigate= useNavigate();
    const SignOut = () => {
        navigate(`/`);
    }
    const GoHome = () => {
        navigate(`/Home`);
    }
    const AboutUs = () => {
        navigate(`/About/Us`);
    }

    return (
        <div className="navbar" style={{display: "flex", flexDirection: "column", height: "100%"}}>
        <ul>
            
            <li style={{color: "#F47181", fontSize: "30px"}}><strong>BEAUTY</strong><span>OU</span><GiLipstick /></li>
                <input type="text" placeholder="Search..." style={{width: "250px", height:35, borderRadius: 3, fontSize: "15px" ,backgroundColor: "#E1E7EC", border: "none", textAlign: "left", paddingLeft: "10px"}}/>
                <li onClick={GoHome} style={{color: "#7D8D9C", fontSize: "15px"}}>Home</li>
            <li className="" onClick={SignOut} style={{color: "#7D8D9C", fontSize: "15px", marginRight: "50px"}}>Sign Out</li>
        </ul>
        <br></br>
    <div className="addReview">
        <label className="product">
            <input
                type="text"
                placeholder="Brand Product"
                style={{width: "15%", height:25, borderRadius: 5, border: "none" ,marginBottom: 10, backgroundColor: "FFFFFF", borderColor: "#7D8D9C", marginTop: 50, marginLeft: 10, textAlign: "center"}}
                />
                </label>

        <label className="type" style={{width: "15%", height:30, borderRadius: 5, border: "none" , marginBottom: 10, backgroundColor: "FFFFFF", borderColor: "#7D8D9C", marginTop: 20, marginLeft: 10}}>
            <select>
                    <option>Eye Shadow</option>
                    <option>Face Palette</option>
                    </select>
            </label>

        <label className="review" style={{width: "15%", height:30, borderRadius: 5, marginBottom: 10, backgroundColor: "FFFFFF", borderColor: "#7D8D9C", marginTop: 20, marginLeft: 10}}>
            <input
                type="text"
                placeholder="Review"
                style={{width: "25%", height:25, borderRadius: 5, border: "none" ,marginBottom: 10, backgroundColor: "FFFFFF", borderColor: "#7D8D9C", marginTop: 20, marginLeft: 10, textAlign: "center"}}
                    />
                </label>
                <Button style={{color: "white",backgroundColor: "#2562D9", borderRadius: 5, width: "10%", border: "none", height: 30, marginTop: 20, marginLeft: 10, textAlign: "center"}}>Add Review</Button>
                <div className="updateReview">
                    <label className="product">
                <input
                    type="text"
                    placeholder="Brand Product"
                    style={{width: "15%", height:25, borderRadius: 5, border: "none" ,marginBottom: 10, backgroundColor: "FFFFFF", borderColor: "#7D8D9C", marginTop: 20, marginLeft: 10, textAlign: "center"}}
                    />
                </label>

                <label className="type" style={{width: "15%", height:30, borderRadius: 5, border: "none" , marginBottom: 10, backgroundColor: "FFFFFF", borderColor: "#7D8D9C", marginTop: 20, marginLeft: 10}}>
                    <select>
                        <option>Eye Shadow</option>
                        <option>Face Palette</option>
                    </select>
                </label>

                <label className="review" style={{width: "15%", height:30, borderRadius: 5, marginBottom: 10, backgroundColor: "FFFFFF", borderColor: "#7D8D9C", marginTop: 20, marginLeft: 10}}>
                <input
                    type="text"
                    placeholder="Review"
                    style={{width: "25%", height:25, borderRadius: 5, border: "none" ,marginBottom: 10, backgroundColor: "FFFFFF", borderColor: "#7D8D9C", marginTop: 20, marginLeft: 10, textAlign: "center"}}
                    />
                </label>
                <Button style={{color: "white",backgroundColor: "#2562D9", borderRadius: 5, width: "10%", border: "none", height: 30, marginTop: 20, marginLeft: 10, textAlign: "center"}}>Update Review</Button>
                </div>
    </div>
    <footer onClick={AboutUs}>
            <strong>ABOUT US</strong>
        </footer>
</div>
    )

}

export default EyesDetailPage;