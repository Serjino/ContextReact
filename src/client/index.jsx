import * as React from 'react';
import * as ReactDom from '../../node_modules/react-dom';
import { App } from '../shared/App';
import {BrowserRouter} from 'react-router-dom'


window.addEventListener('load', () => {
    ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));
});