import React from 'react';
import PersonDescriptionModule from './PersonDescription.module.css';


function PersonDescription(props) {
    return (
        <div className={PersonDescriptionModule["description"]}>
            <div className={PersonDescriptionModule["avatar"]}>
                Avatar
            </div>
            <div className={PersonDescriptionModule["characteristics"]}>
                description of characteristics
            </div>
        </div>

    )
}

export default PersonDescription;