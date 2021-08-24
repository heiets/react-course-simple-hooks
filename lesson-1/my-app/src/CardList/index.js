import React, { useContext } from 'react';

import { GlobalContext } from '../App';
import { Card } from '../Card';

import '../App.css';

export const CardList = () => {
    const { state: { citiesList } } = useContext(GlobalContext);
    return (
        <div className="CardList">
            {
                citiesList.map(city => <Card key={city} city={city} />)
            }
        </div>
    )
}