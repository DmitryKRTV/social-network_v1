import React from 'react';
import PersonDescriptionModule from './PersonDescription.module.css';
import Preloader from "../../common/preloader/Preloader";


function PersonDescription(props) {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={PersonDescriptionModule["description"]}>
            <div className={PersonDescriptionModule["avatar"]}>
                <img src={props.profile.photos.large} alt={""}/>
            </div>
            <div className={PersonDescriptionModule["characteristics"]}>
                description of characteristics
            </div>
        </div>

    )
}

export default PersonDescription;