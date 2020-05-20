import React, {useState} from 'react';
import UpdateField from '../helpers/updateField';
import { Switch } from "@material-ui/core";

const UpdateValueCheckbox = ({ id, keyVal, value }) => {
  const [check, setCheck] = useState(value);

  return (
    <>
      <p>Featured?</p>
      <div>
        <Switch
          checked={check}
          id={`${id}-yes-no`}
          onChange={(event) => {
            setCheck(!check);
            UpdateField(id, keyVal, !check);
          }}
          name="featuredSwitch"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        >
        </Switch>
        {/* <input
          className="switch-input"
          id={`${id}-yes-no`}
          type="checkbox"
          name="featuredSwitch"
          checked={check}
          onChange={(event) => {
            setCheck(!check);
            UpdateField(id, keyVal, !check);
          }}
        />
        <label className="switch-paddle" htmlFor={`${id}-yes-no`}>
          <span className="show-for-sr">Featured?</span>
          <span className="switch-active" aria-hidden="true">
            Yes
          </span>
          <span className="switch-inactive" aria-hidden="true">
            No
          </span>
        </label> */}
      </div>
    </>
  );
};


export default UpdateValueCheckbox;