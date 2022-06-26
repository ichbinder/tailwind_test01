import React from 'react';
import ReactDOM from 'react-dom';
import { Login } from './components/Login';

const App = () => <h1>My React and TypeScript App!</h1>;

ReactDOM.render(
    <>
        <App />
        <Login title='Login' />
    </>,
    document.getElementById('root'),
);
