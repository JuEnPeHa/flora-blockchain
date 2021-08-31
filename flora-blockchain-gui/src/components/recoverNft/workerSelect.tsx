import { FormControl, InputLabel, MenuItem, Theme}
  from '@material-ui/core';
import styles from "@material-ui/styles";
import React from "react";
import {Select} from "@flora/core";
import ReactDOM from 'react-dom';

const useStyles = styles.makeStyles((theme: Theme) =>
styles.createStyles({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}),
);

export default function SelectWorker() {
  const classes = useStyles();
  const [worker, setWorker] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setWorker(event.target.value as string);
    this.setState({name: event})
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="select-Worker-Label">Worker</InputLabel>
        <Select
          labelId="select-Worker"
          id="worker-Select"
          value={worker}
          onChange={handleChange}
          label="worker"
          >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value ={1}>fd_cli</MenuItem>
          <MenuItem value ={1}>noActionYet</MenuItem>
          <MenuItem value ={1}>Soon</MenuItem>
        </Select>
      </FormControl>
    </div>
  )


}
