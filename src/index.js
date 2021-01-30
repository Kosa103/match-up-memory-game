import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';


function initGameRecords() {
    const initData = {
        6: "none",
        8: "none",
        10: "none",
        12: "none",
        14: "none",
        16: "none",
        18: "none",
        20: "none"
    };
    if (localStorage.getItem("matchUpGameRecords" === null)) {
        localStorage.setItem("matchUpGameRecords", JSON.stringify(initData));
    }
}


initGameRecords();

ReactDOM.render(
    (
        <Router>
            <App />
        </Router>
    ),
    document.getElementById('root')
);
