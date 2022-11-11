import { React, useState } from "react";
import cover from "../asset/Cover.jpg";
import { Button } from "react-bootstrap";

const LoginForm = ({login}) => {
    const [details, setDetails] = useState({name:"", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        login(details);
    }

    return(
        <>
        <div className="cover" style={{display: "flex", flexDirection: "row", justifyContent: "space-between", height: "681px", width: "100%"}}>
            <img src={cover} alt="cover in login"/>
                <div className="form-card" style={{display: "flex", justifyContent: "center"}}>
                    <h1 className="title">Sign In To Your Account</h1>

                    <form onSubmit={submitHandler} >
                        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                            
                        <div className="form-group">
                                <label className="form">
                                    Email
                                    <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={e => setDetails({...details, email: e.target.value})} value={details.email}
                                    required
                                    style={{
                                        width: "100%", 
                                        height:30, 
                                        marginBottom: 10, 
                                        borderRadius: 6,
                                        backgroundColor: "#F8F2ED", 
                                        borderColor: "#D9D9D9", 
                                        marginTop: 10}}/>
                                </label>
                            </div>
                            
                            <div className="form-group">
                                <label className="form">
                                    Username
                                    <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    onChange={e => setDetails({...details, name: e.target.value})} value={details.name}
                                    required
                                    style={{
                                        width: "100%", 
                                        height:30, 
                                        marginBottom: 10, 
                                        borderRadius: 6,
                                        backgroundColor: "#F8F2ED", 
                                        borderColor: "#D9D9D9", 
                                        marginTop: 10}}/>
                                </label>
                            </div>

                            <div className="form-group">
                                <label className="form">
                                    Password
                                    <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={e => setDetails({...details, password: e.target.value})} value={details.password}
                                    required
                                    style={{
                                        width: "100%", 
                                        height:30, 
                                        marginBottom: 10, 
                                        borderRadius: 6,
                                        backgroundColor: "#F8F2ED", 
                                        borderColor: "#D9D9D9", 
                                        marginTop: 10}}/>
                                </label>
                            </div>
                            
                            <Button type="submit"
                            value="LOGIN"
                            style={{
                                color: "white",
                                backgroundColor: "#F47181", 
                                borderRadius: 20, 
                                width: "20%", 
                                border: "none", 
                                height: 35, 
                                marginTop: 10, 
                                display: "flex", 
                                justifyContent: "center", 
                                alignItems: "center"}}>
                                Sign In
                            </Button>
                        </div>
                    </form>
                </div>
        </div>
        </>
    );
};

export default LoginForm;