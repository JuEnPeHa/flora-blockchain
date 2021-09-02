import {FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Radio}
  from '@material-ui/core';
import React from "react";
import {Flex, RadioGroup, Select} from "@flora/core";
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
      </Grid>

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
              label={<Trans>Plot in Worker</Trans>}
              value
            />
          </Flex>
        </RadioGroup>
      </FormControl>

    </Grid>

  )}
