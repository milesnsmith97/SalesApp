import React from 'react';

class ChartSelect extends React.Component {
    state = {
        defaultOption: '-- Select Chart Type --',
    }

    render() {
        return <div>
            <div className='custom-select' style={{width: this.props.width || 280}}>
                <select defaultValue={this.state.defaultOption}>
                    <option value="">-- Select Chart Type --</option>
                    <option value="option 1">Bar</option>
                    <option selected value="option 2">Polar</option>
                </select>
            </div>
        </div>
    }
}

export default ChartSelect;