import {FormControl, FormControlLabel, Grid, InputAdornment, InputLabel,
  MenuItem, Radio, Typography} from '@material-ui/core';
import React from "react";
import {Flex, RadioGroup, Select, TextField} from "@flora/core";
import { useFormContext } from 'react-hook-form';
import { Trans } from '@lingui/macro';
import {Route, Switch, useRouteMatch} from "react-router-dom";
import LookForNftCoins from "./RecoverNftInputText";

export default function SelectWorker() {
  const { path } = useRouteMatch();
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
          <FormControlLabel value control={<MenuItem>fd_cli</MenuItem>} label={<Trans>Add Plot to Queue</Trans>}
          />
          <FormControlLabel value={false} control={<MenuItem>noActionYet</MenuItem>} label={<Trans>Add Plot to Queue</Trans>}
          />
        </Select>
      </FormControl>
      </Grid>

      {worker && (
        <Flex flexDirection="column" gap={3}>
        <Switch>
          <Route path={path} exact>
            <LookForNftCoins />
          </Route>
        </Switch>
        </Flex>
      )}
    </Grid>


  )}
