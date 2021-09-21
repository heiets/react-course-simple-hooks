import React, { useState } from 'react';

import { DailyCard } from '../DailyCard';

import '../App.css';

export const DailyCards = ({ daily }) => {
    const [orderBy, setOrderBy] = useState('by_date_asc');

    const handleOnChange = (event) => {
        setOrderBy(event.target.value);
    };

    let sortedCitiesList = daily.sort((a, b) => a.dt - b.dt);
    if (orderBy === 'by_date_desc') {
        sortedCitiesList.reverse();
    }
    return (
        <>
            <select className="Select" value={orderBy} onChange={handleOnChange}>
                <option value="by_date_asc">By date asc</option>
                <option value="by_date_desc">By date desc</option>
            </select>
            <div className="DailyCards">
                {sortedCitiesList.map(dailyCard => <DailyCard dailyCard={dailyCard} key={dailyCard.dt} />)}
            </div>
        </>
    )
};