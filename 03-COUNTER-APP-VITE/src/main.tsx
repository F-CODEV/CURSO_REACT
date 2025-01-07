import React from 'react';

import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* <FirstApp name='Francisco' /> */}
        <CounterApp value={10} />
    </React.StrictMode>
);
