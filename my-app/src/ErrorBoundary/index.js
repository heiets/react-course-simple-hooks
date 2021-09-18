import React from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }
    componentDidCatch(error, errorInfo) {
        console.log('errorInfo', errorInfo);
        this.setState({ error, });
    }
    render() {
        console.log('this.props.children', this.props.children);
        console.log('this.state.error', this.state.error);
        if (this.state.error) {
            return <div>Component has crashed</div>;
        }
        return this.props.children;
    }
}