import React from 'react';

interface TProps {
    message: string
    btnText?: string
}

interface TState {
    count: number;
}

export default class MainPage extends React.Component<TProps> {
    state: TState = {
        count: 0
    }

    render() {
        return (<div>
            <h1>MainPage here</h1>
            <p>{this.props.message}</p>
            <p>Counter: {this.state.count}</p>
            <button>{this.props.btnText}</button>
        </div>);
    }
}