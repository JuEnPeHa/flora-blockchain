import { FormControl, Grid, InputLabel, MenuItem, Theme}
  from '@material-ui/core';
import React from "react";
import {Select} from "@flora/core";
import ReactDOM from 'react-dom';
import {makeStyles, createStyles} from "@material-ui/styles";
import { useFormContext } from 'react-hook-form';
import { Trans } from '@lingui/macro';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
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
  const { watch } = useFormContext();
  const workers = watch("workers")
  const classes = useStyles();
  const [worker, setWorker] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setWorker(event.target.value as string);
    console.log(event.target.value)
  };

  return (
    <Grid spacing={2} direction="column" container>
      <Grid xs={12} md={8} lg={6} item>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="select-Worker-Label">Worker</InputLabel>
        <Select
          labelId="select-Worker"
          id="worker-Select"
          value={worker}
          onChange={handleChange}
          label="worker"
          name="workers"
          >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value ={1}>fd_cli</MenuItem>
          <MenuItem value ={1}>noActionYet</MenuItem>
          <MenuItem value ={1}>Soon</MenuItem>
        </Select>
      </FormControl>
      </Grid>

  {workers && (
    <Grid xs={12} md={8} lg={6} item>
      <Trans>HEY, IT WORKS</Trans>
    </Grid>
  )}
    </Grid>

  )


}
