import React from "react";
import { BarLoader } from "react-spinners";

const Loading = () => {
    return(
        <>
        <div style={{display: "flex", justifyContent: "center", marginTop: "200px"}}>
            <BarLoader
            color="#F47181"/>
            </div>
        </>
    );
};

export default Loading;