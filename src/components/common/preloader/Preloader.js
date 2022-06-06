import React from 'react';
import spinner from "../../../assets/Spinner-1s-200px.svg";

const Preloader = (props) => {
    return (
        <div>
            <img src={spinner} alt={""}/>
        </div>
    );
};

export default Preloader;
