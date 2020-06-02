import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from '@material-ui/core/MenuItem';
import updateField from '../helpers/updateField';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const UpdateSelectInput = ({coll, id, keyVal, selections, value }) => {
  const [select, setSelect] = useState(value);
  const classes = useStyles();

  useEffect(() => {
    console.log(select);
    updateField(coll, id, keyVal, select, (body) => {
        // console.log(body.category);
    })
  }, [select]);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id={`${keyVal}-id`}>{keyVal}</InputLabel>
      <Select
        labelId={`${keyVal}-id`}
        id={`${keyVal}-select`}
        value={select}
        onChange={(event) => {
          setSelect(event.target.value);
        }}
      >
        {selections
          ? selections.map((value, key) => (
              <MenuItem key={key} value={value}>
                {value}
              </MenuItem>
            ))
          : ""}
      </Select>
    </FormControl>
  );
};

export default UpdateSelectInput;
//
