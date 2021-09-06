import {
  FormControl,
  FormControlLabel,
  Grid, InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  Typography
}
  from '@material-ui/core';
import React from "react";
import {Flex, RadioGroup, Select, TextField} from "@flora/core";
import { useFormContext } from 'react-hook-form';
import { Trans } from '@lingui/macro';

export default function SelectWorker() {
  const {watch} = useFormContext();
  const worker = watch("worker");


  return (
    <Grid spacing={2} direction="column" container>
      <Grid xs={12} md={8} lg={6} item>
      <FormControl variant="filled" fullWidth>
        <InputLabel required>
          <Trans>Worker</Trans>
        </InputLabel>
        <Select name="worker">
          <MenuItem value ={1}>fd_cli</MenuItem>
          <MenuItem value ={2}>noActionYet</MenuItem>
          <MenuItem value ={3}>Soon</MenuItem>
        </Select>



      </FormControl>

        <FormControl variant="filled" fullWidth>
          <RadioGroup name="worker" boolean>
            <Flex gap={2} flexWrap="wrap">
              <FormControlLabel
                value={false}
                control={<Radio />}
                label={<Trans>Add Plot to Queue</Trans>}
              />
              <FormControlLabel
                control={<Radio />}
                label={<Trans>Plot in Parallel</Trans>}
                value
              />
            </Flex>
          </RadioGroup>
        </FormControl>
      </Grid>

      {worker && (
        <Grid xs={12} md={8} lg={6} item>
          <FormControl variant="filled">
            <Typography variant="subtitle1">
              <Trans>Want to have a delay before the next plot starts?</Trans>
            </Typography>
            <TextField
              name="delay"
              type="number"
              variant="filled"
              label={<Trans>Delay</Trans>}
              InputProps={{
                inputProps: { min: 0 },
                endAdornment: (
                  <InputAdornment position="end">
                    <Trans>Minutes</Trans>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </Grid>
      )}
    </Grid>


  )}
