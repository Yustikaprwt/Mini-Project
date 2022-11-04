import React from "react";
import { GiLipstick } from 'react-icons/gi';
import { BsFillHeartFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate= useNavigate();
    const SignOut = () => {
        navigate(`/Login`);
    }
    const GoHome = () => {
        navigate(`/Home`);
    }
    const Wishlist = () => {
        navigate(`/Wishlist`);
    }

    return(
        <nav class="navbar navbar-expand-lg fixed-top navbar-scroll bg-light">
        <div class="container">
            <h1 className="webName"><strong>BEAUTY</strong>OU<GiLipstick/></h1>
            <button class="navbar-toggler ps-0" 
                    type="button" 
                    data-mdb-toggle="collapse" 
                    data-mdb-target="#navbarExample01" 
                    aria-controls="navbarExample01" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon d-flex justify-content-start align-items-center">
                            <i class="fas fa-bars"></i>
                        </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarExample01">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                        <a onClick={GoHome} className="nav-link">Home</a>
                        </li>
                    <li className="nav-item">
                        <a onClick={SignOut} className="nav-link">Sign Out</a>
                        </li>
                    <li className="nav-item">
                        <a onClick={Wishlist} className="nav-link"> <BsFillHeartFill/> </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;