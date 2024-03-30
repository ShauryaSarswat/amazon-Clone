import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './src/pages/homepage';

const container = document.getElementById("container");
const root = ReactDOM.createRoot(container);

const App = () =>{
    return (
        <Homepage/>
    )
}
root.render(<App/>);