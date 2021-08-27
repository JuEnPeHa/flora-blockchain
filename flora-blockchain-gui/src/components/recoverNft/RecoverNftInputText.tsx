import React /* , { ReactNode } */ from 'react';
import { Trans } from '@lingui/macro';
import {More, Amount, Fee, Form, TextField as FloraTextField, AlertDialog,
  CopyToClipboard, Flex, Card,} from '@flora/core';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Container, Grid } from '@material-ui/core';
import isNumeric from 'validator/es/lib/isNumeric';
import { useForm, useWatch } from "react-hook-form";
import LayoutHero from "../layout/LayoutHero";
import { openDialog } from '../../modules/dialog';


type SetNftPlotData = {
  FD_CLI_BC_DB_PATH: string;
  FD_CLI_WT_DB_PATH: string;
  LAUNCHER_HASH: string;
  POOL_CONTRACT_ADDRESS: string;
};

function handleSubmit(data){
  console.log(data)
}

function LookForNftCoinsInputText() {
  const dispatch = useDispatch();

  const methods = useForm<SetNftPlotData>({
    shouldUnregister: false,
    defaultValues: {
      FD_CLI_BC_DB_PATH: '',
      FD_CLI_WT_DB_PATH: '',
      LAUNCHER_HASH: '',
      POOL_CONTRACT_ADDRESS: '',
    },
  });

  return (
    <Card
      title={<Trans>Texto 03</Trans>}
      tooltip={<Trans>Texto 04 (Tooltip)</Trans>}
      >
    <Form methods={methods} onSubmit={handleSubmit}>
      <Grid spacing={3} container>
        <Grid xs={12} item>
          <FloraTextField
            name="FD_CLI_BC_DB_PATH"
            variant="filled"
            color="secondary"
            fullWidth
            label={<Trans>FD_CLI_BC_DB_PATH</Trans>}
            />
        </Grid>
      </Grid>

    </Form>

    </Card>


  )

}

export default function LookForNftCoins() {
  const dispatch = useDispatch();

  return (
    <LayoutHero>
      <Container maxWidth="xs">
  <Flex flexDirection="column" gap={1}>
    <Flex gap={1} alignItems="center">

      <Flex flexGrow={1}>
        <Typography variant="h3" gutterBottom>
          <Trans>Texto 01</Trans>
        </Typography>
      </Flex>
    </Flex>

    <Flex flexDirection="column" gap={2}>
      <Flex gap={1} justifyContent="flex-end">
        <Typography color="textSecondary">
          <Trans>Texto 02</Trans>
        </Typography>

      </Flex>

    </Flex>
  </Flex>
      </Container>
    </LayoutHero>
  );
}
