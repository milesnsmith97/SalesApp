import React from 'react';
import './ChartSelect.css';

const ChartSelect = props => (
    <div className="dropdown">
            <button className="dropbtn">
                Filter By Category
            </button>
            <div className="dropdown-content">
                <a href ="#" onClick={props.click}>Wholesale</a>
                <a href="#">Online</a>
                <a href="#">Fol Deals</a>
            </div>
        </div>
);


export default ChartSelect;