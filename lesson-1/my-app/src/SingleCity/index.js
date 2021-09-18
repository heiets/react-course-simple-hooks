import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Card } from '../Card';
import { DailyCards } from '../DailyCards';

import { useForecast } from '../hooks/useForecast';

import '../App.css';

export const SingleCity = () => { 
    const params = useParams();
    const [cityCoord, setCityCoord] = useState(null);
    const data = useForecast(cityCoord);
    const { city } = params;
    return (
        <div className="SingleCityWrap">
            <Link to="/home" className="GoBack">Go back</Link>
            <Card city={city} setCityCoord={setCityCoord} />
            {data && <DailyCards daily={data.daily} />}
        </div>
    )
};