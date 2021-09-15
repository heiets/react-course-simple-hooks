import React from 'react';

import '../App.css';

export const InputTag = ({ handleOnChange, inputValue, inputRef }) => {
    return (
        <input className="Input" onChange={handleOnChange} value={inputValue} ref={inputRef} />
    )
}