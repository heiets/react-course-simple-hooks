import { useEffect, useReducer } from 'react';

import { removeElementFromArray } from '../helpers';

const initialState = {
    inputValue: '',
    editingCity: '',
    citiesList: JSON.parse(localStorage.getItem('citiesList')) || [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CITY': {
            const newState = { ...state, citiesList: [...state.citiesList, action.payload] };
            return newState;
        }
        case 'DELETE_CITY': {
            const oldArray = state.citiesList;
            const newArray = removeElementFromArray(action.payload, oldArray);
            return {
                ...state,
                citiesList: newArray,
                editingCity: initialState.editingCity,
                inputValue: initialState.inputValue,
            };
        }
        case 'EDIT_CITY': {
            return { ...state, inputValue: action.payload, editingCity: action.payload };
        }
        case 'EDIT_CITY_DONE': {
            if (!action.payload) {
                return {
                    ...state,
                    inputValue: initialState.inputValue,
                    editingCity: initialState.editingCity,
                };
            }
            const { editingCity } = state;
            const oldArray = state.citiesList;
            const filteredArray = removeElementFromArray(editingCity, oldArray);
            const newArray = [...filteredArray, action.payload];
            return {
                ...state,
                citiesList: newArray,
                inputValue: initialState.inputValue,
                editingCity: initialState.editingCity,
            };
        }
        case 'CHANGE_INPUT_VALUE': {
            return { ...state, inputValue: action.payload };
        }
        case 'RESET_INPUT_VALUE': {
            return { ...state, inputValue: initialState.inputValue };
        }
        default:
            return initialState;
    }
}

export const useCitiesList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { citiesList } = state;
    useEffect(() => {
        localStorage.setItem('citiesList', JSON.stringify(citiesList));
    }, [citiesList]);
    return [state, dispatch];
}