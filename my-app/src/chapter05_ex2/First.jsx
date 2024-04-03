import React from "react";
import "./first.css";
import Header from "./Header";
import TimeArea from "./TimeArea";
import Footer from "./Footer";

function First() {
    return (
        <div>
            <Header />
            <TimeArea />
            <Footer school="부산IT교육센터" />
        </div>
    );
}



export default First;