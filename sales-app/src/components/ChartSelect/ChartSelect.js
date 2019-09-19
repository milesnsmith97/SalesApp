import React from 'react';

import './ChartSelect.css'

class ChartSelect extends React.Component {
    state = {
        defaultOption: '-- Select Chart Type --',
    }

    render() {
        return <div>
            {/* <div className='dropdown' style={{width: this.props.width || 280}}>
                <select defaultValue={this.state.defaultOption}>
                    <option value="">-- Select Chart Type --</option>
                    <option value="option 1">Bar</option>
                    <option selected value="option 2">Polar</option>
                </select>
            </div>
        </div> */}
        <div className="dropdown">
            <button className="dropbtn">Filter By Date</button>
            <div className="dropdown-content">
                <a href="#">Polar</a>
                <a href="#">Bear</a>
            </div>
        </div>
    </div>
    }
}

export default ChartSelect;