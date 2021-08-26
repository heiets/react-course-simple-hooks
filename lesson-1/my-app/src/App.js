import React from 'react';

import './App.css';

import { Input } from './Input';
import { CardList } from './CardList';
import { useCitiesList } from './hooks/useCitiesList';

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className="Main">
        <Input />
        {state.citiesList.length && <CardList citiesList={state.citiesList}/>}
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
