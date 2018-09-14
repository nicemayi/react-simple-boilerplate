import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import ReduxDemo from './redux-demo';

const Link1 = () => <h2>Link1</h2>;

export default class App extends React.Component {
    state = {
        greetingText: 'Hello from boilerplate!'
    };

    render() {
        return (
            <BrowserRouter>
                <div>
                    <div>
                        <Link to="/link1">Link1</Link>
                        <Link to="/redux-demo">Redux Demo</Link>
                    </div>
                    <Switch>
                        <Route path="/link1" component={Link1} />
                        <Route path="/redux-demo" component={ReduxDemo} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}