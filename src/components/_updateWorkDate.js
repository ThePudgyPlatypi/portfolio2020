import React, { useEffect } from "react";
import {
  FormGroup,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { format } from "date-fns";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const UpdateWorkDate = ({ work, setWork }) => {
  const classes = useStyles();

  if (!work.date) {
    work.date = {
      startDate: "",
      endDate: "",
      currentlyEmployed: false,
    };
  }

  useEffect(() => {
    if (work.date.currentlyEmployed) {
      setWork((prevState) => ({
        ...prevState,
        date: {
          ...prevState.date,
          endDate: format(Date.now(), "yyyy-MM-dd"),
        },
      }));
    }
  }, [work.date.currentlyEmployed, setWork]);

  const handleCurrentlyEmployed = () => {
    setWork((prevState) => ({
      ...prevState,
      date: {
        ...prevState.date,
        currentlyEmployed: !prevState.currentlyEmployed,
      },
    }));
  };

  const handleDateChange = (e, value) => {
    let target = e.target.value;
    setWork((prevState) => ({
      ...prevState,
      date: {
        ...prevState.date,
        [value]: target,
      },
    }));
  };

  return (
    <>
      <FormGroup row className={classes.fromTo}>
        <TextField
          id="dateStart"
          label="Start Date"
          type="date"
          defaultValue={format(Date.now(), "yyyy-MM-dd")}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => handleDateChange(e, "startDate")}
        />
        <div className={classes.endDateWrapper}>
          <TextField
            id="dateEnd"
            label="End Date"
            type="date"
            disabled={work.date.currentlyEmployed}
            defaultValue={format(Date.now(), "yyyy-MM-dd")}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => handleDateChange(e, "endDate")}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={work.date.currentlyEmployed}
                onChange={handleCurrentlyEmployed}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            label="Currently Employed"
          />
        </div>
      </FormGroup>
    </>
  );
};

export default UpdateWorkDate;
