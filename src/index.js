import React from 'react';
import {render} from 'react-dom';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';


const App = () => (
    <div>
        <div className="center">
            Hello world!
        </div>
    </div>
);

render(
    <App/>,
    document.getElementById('root')
);

registerServiceWorker();

