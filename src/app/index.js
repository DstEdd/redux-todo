import React from 'react';
import ReactDOM from 'react-dom';

const Core = () =>(
    <div id="navbar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
    </div>
);

ReactDOM.render(<Core/>, document.getElementById('root'));