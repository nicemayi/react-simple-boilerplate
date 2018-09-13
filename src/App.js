import React from 'react';

export default class App extends React.Component {
    state = {
        greetingText: 'Hello from boilerplate!'
    };

    render() {
        return <div>{this.state.greetingText}</div>;
    }
}