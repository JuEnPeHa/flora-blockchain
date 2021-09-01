import { FormControl, Grid, InputLabel, MenuItem }
  from '@material-ui/core';
import React from "react";
import {Select} from "@flora/core";
import ReactDOM from 'react-dom';
import {makeStyles, createStyles} from "@material-ui/styles";
import { useFormContext } from 'react-hook-form';
import { Trans } from '@lingui/macro';

export default function SelectWorker() {

  function handleChange (event: any) {
    // eslint-disable-next-line no-console
    console.log(event);
  }

  return (
    <Grid spacing={2} direction="column" container>
      <Grid xs={12} md={8} lg={6} item>
      <FormControl variant="filled" fullWidth>
        <InputLabel required>
          <Trans>Worker</Trans>
        </InputLabel>
        <Select name="worker">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value ={1}>fd_cli</MenuItem>
          <MenuItem value ={2}>noActionYet</MenuItem>
          <MenuItem value ={3}>Soon</MenuItem>
        </Select>
      </FormControl>
      </Grid>

  {Worker && (
    <Grid xs={12} md={8} lg={6} item>
      <Trans>HEY, IT WORKS</Trans>
    </Grid>
  )}
    </Grid>

  )


}
