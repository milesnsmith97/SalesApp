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

// class ChartSelect extends React.Component {
//     state = {
//         defaultOption: '-- Select Chart Type --',
//     }

//     render() {
//         return <div>
//             {/* <div className='dropdown' style={{width: this.props.width || 280}}>
//                 <select defaultValue={this.state.defaultOption}>
//                     <option value="">-- Select Chart Type --</option>
//                     <option value="option 1">Bar</option>
//                     <option selected value="option 2">Polar</option>
//                 </select>
//             </div>
//         </div> */}
//         <div className="dropdown">
//             <button className="dropbtn">Filter By Category</button>
//             <div className="dropdown-content">
//                 <a href="#">Wholesale</a>
//                 <a href="#">Online</a>
//                 <a href="#">Fol Deals</a>
//             </div>
//         </div>
//     </div>
//     }
// }

export default ChartSelect;