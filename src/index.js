import React from 'react';
import { render } from 'react-dom';

import './styles.scss';

const App = () => {
    return (
        <div>
            <h3>App is working s!</h3>
        </div>
    );
};

render(<App />, document.getElementById('app'));
