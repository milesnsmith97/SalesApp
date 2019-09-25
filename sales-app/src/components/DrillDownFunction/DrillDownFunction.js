import React from 'react';
import DrillDownOn from '../DrillDownDisplay/DrillDownOn';
import DrillDownOff from '../DrillDownDisplay/DrillDownOff'

const DrillDownFunction = props => {

const isDrilledDown = props.isDrilledDown
if(isDrilledDown) {

    return <DrillDownOn/>
}
else {
    return <DrillDownOff/>

}
}

export default DrillDownFunction;