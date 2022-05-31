import React from 'react';
import PersonImageModule from './PersonImage.module.css';


function PersonImage(props) {
    return (
        <div className={PersonImageModule["personalImage"]}>
            Some Profile Image
        </div>
    )
}

export default PersonImage;