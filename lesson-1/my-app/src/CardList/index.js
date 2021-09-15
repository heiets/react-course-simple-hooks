import React from 'react';

import { Card } from '../Card';
import { withGlobalState } from '../hocs/withGlobalState';

import '../App.css';

export class CardListNoState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderBy: 'asc',
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        this.setState({
            orderBy: event.target.value,
        });
    }

    render() {
        const { orderBy } = this.state;
        const { citiesList } = this.props.state;
        let sortedCitiesList = citiesList.sort();
        if (orderBy === 'desc') {
            sortedCitiesList.reverse();
        }
        return (
            <>
                <select className="Select" value={orderBy} onChange={this.handleOnChange}>
                    <option value="asc">By name asc</option>
                    <option value="desc">By name desc</option>
                </select>
                <div className="CardList">
                    {
                        sortedCitiesList.map(city => <Card key={city} city={city} />)
                    }
                </div>
            </>
        )
    }
}

export const CardList = withGlobalState(CardListNoState);