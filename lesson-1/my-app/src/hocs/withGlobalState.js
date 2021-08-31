import { useContext } from 'react';

import { GlobalContext } from '../App';

export const withGlobalState = Component => (props) => {
    const { state } = useContext(GlobalContext);
    return <Component {...{ ...props, state }} />;
}