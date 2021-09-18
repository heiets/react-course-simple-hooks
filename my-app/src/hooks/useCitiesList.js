import { useState, useEffect } from 'react';

export const useCitiesList = () => {
    const [citiesList, setCitiesList] = useState(JSON.parse(localStorage.getItem('citiesList')) || []);
    useEffect(() => {
        localStorage.setItem('citiesList', JSON.stringify(citiesList));
    }, [citiesList]);
    return [citiesList, setCitiesList];
}