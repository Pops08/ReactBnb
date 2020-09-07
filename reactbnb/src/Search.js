import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import './Search.css';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Button } from "@material-ui/core";
import PeopleIcon from '@material-ui/icons/People';

// Date Picker Component
function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  //Required from the date range package
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  //Responsible for selecting a date. E.g. set the start date to what was selected for the start date
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number Of Guests
        <PeopleIcon />
        </h2>
        <input min={0} defaultValue={2} type="number" />
        <Button>Search AirBnb</Button>
    </div>
  );
}

export default Search;
