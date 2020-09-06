import React, { useState } from 'react'
import './Search.css'
//Main Style file
//import "react-data-range/dist/styles.css"
//Theme CSS File
//import "react-date-range/dist/theme/default.css"
//import {DateRangePicker} from "react-date-range"


// Date Picker Component
function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    return (
        <div className='search'>
            
        </div>
    )
}

export default Search
