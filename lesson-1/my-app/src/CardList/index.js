import React from 'react';

import { Card } from '../Card';

import '../App.css';

export class CardList extends React.Component {
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
        const { citiesList } = this.props;
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
