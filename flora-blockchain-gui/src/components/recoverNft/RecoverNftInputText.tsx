import React /* , { ReactNode } */ from 'react';
import { Trans } from '@lingui/macro';
import {More, Amount, Fee, Form, TextField as FloraTextField, AlertDialog,
  CopyToClipboard, Flex, Card,} from '@flora/core';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';

type SetNftPlotData = {
  FD_CLI_BC_DB_PATH: string;
  FD_CLI_WT_DB_PATH: string;
  LAUNCHER_HASH: string;
  POOL_CONTRACT_ADDRESS: string;
};

export default function LookForNftCoins() {
  const dispatch = useDispatch();

  return (
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
  );
}
