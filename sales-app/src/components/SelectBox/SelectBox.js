// import React from 'react';
// import './SelectBox.css'

// class SelectBox extends React.Component {
//     state = {
//         items: this.props.items || [],
//         showItems: false,
//         selectedItem: this.props.items && this.props.items[0],
//         myOption: '-- Select Department --',
//     }

//     // dropDown = () => {
//     //     this.setState(prevState => ({
//     //         showItems: !prevState.showItems,
//     //     }))
//     // }

//     // selectItem =(item) => this.setState({
//     //     selectedItem: item,
//     //     showItems: false,
//     // })

//     render() {
//         return <div className="drop-down-container">
//             {/* <div className="select-box--box"
//                 style={{width: this.props.width || 180}}>
//                 <div className="select-box--container">
//                     <div className="select-box--selected-item">
//                         {this.state.selectedItem.value}
//                     </div>
//                     <div 
//                         className="select-box--arrow"
//                         onClick={this.dropDown}>
//                         <span className={`${this.state.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}`}
//                         />
//                     </div>
//                     <div style={{display: this.state.showItems ? 'block' : 'none' }}
//                     className="select-box--items">
//                         {
//                             this.state.items.map(item => 
//                                 <div key = { item.id }
//                                     onClick={() => this.selectItem(item)}
//                                     className={this.state.selectedItem === item ? 'selected' : ''}>
//                                     { item.value }
//                                 </div>)
//                         }
//                     </div>
//                 </div>
//             </div> */}
//             <div className='custom-select' style={{width: this.props.width || 280}}>
//                 <select defaultValue={this.state.myOption}>
//                     <option value="">-- Select Department --</option>
//                     <option value="option 1">Wholesale</option>
//                     <option selected value="option 2">FOL Deals</option>
//                     <option value="option 3">Online</option>
//                 </select>
//             </div>
//         </div>
//     }
// }

// export default SelectBox;