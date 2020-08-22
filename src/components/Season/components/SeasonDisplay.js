import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is cold!',
        iconName: 'snowflake'
    }
};
const getSeason = (latitude, month) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? 'summer' : 'winter';
    }
    else {
        return latitude > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const {text, iconName } = seasonConfig[season];
    return (
    <div>
        <i className={`${iconName} icon`}></i>
        <h1>{text}</h1>
        <i className={`${iconName} icon`}></i>
    </div>
    );
}

export default SeasonDisplay;