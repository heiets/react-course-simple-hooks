import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import { useCitiesList } from './hooks/useCitiesList';

import { ErrorBoundary } from './ErrorBoundary';
import { Input } from './Input';
import { CardList } from './CardList';
import { SingleCity } from './SingleCity';

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();
  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ state, dispatch }}>
        <div className="Main">
          <Route path="/home">
              <Input />
              <ErrorBoundary>
                <CardList />
              </ErrorBoundary>
          </Route>
          <Route path="/city/:city" component={SingleCity} />
        </div>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
