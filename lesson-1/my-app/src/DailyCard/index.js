import React from 'react';

import '../App.css';

export const DailyCard = ({ dailyCard }) => {
    const { dt, weather, temp: { day } } = dailyCard;
    const { main, icon } = weather[0];
    const currentDate = new Date(dt * 1000);
    return (
        <div className="DailyCard">
            <div>{currentDate.toString().split(' ')[0]}</div>
            <img className="Icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
            <div className="TemperatureIcon">{day.toFixed(0)}</div>
            <div>{main}</div>
        </div>
    )
};