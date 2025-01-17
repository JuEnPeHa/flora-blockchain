import React, {useState} from "react";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import {Flex, Form, Link} from "@flora/core";
import { Trans } from "@lingui/macro";
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {SubmitHandler, useForm} from "react-hook-form";
import { Grid } from "@material-ui/core";
import RecoverNftSelectFingerprint
  from "./RecoverNftSelectFingerprint";
import LayoutMain from "../layout/LayoutMain";
import { RecoverNftHeaderTarget } from "./RecoverNftHeader";
import LookForNftCoins from "./RecoverNftInputText";
import SelectWorker from "./WorkerSelect";
import type {RootState} from "../../modules/rootReducer";
import WorkerConfig from "../../types/Worker";
import useOpenDialog from "../../hooks/useOpenDialog";
import LoginControl from "./ExampleSetState"
import ErrorRadios from "./ExampleDos";

type FormData = WorkerConfig & {
  p2_singleton_puzzle_hash?: string;
  createNFT?: boolean;
};

export default function RecoverNft() {
  const { path } = useRouteMatch();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const fingerprint = useSelector(
    (state: RootState) => state.wallet_state.selected_fingerprint,
  );
  const openDialog = useOpenDialog();


  const methods = useForm<FormData>({
    shouldUnregister: false,
    defaultValues: {
      fd_cli: false,
      worker: false,
      farmerPublicKey: "",
      poolPublicKey: "",
  },
  });

  const { watch, setValue } = methods;

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    try {
      setLoading(true);
      const {...rest} = data;
      const {farmerPublicKey, poolPublicKey} = rest;
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayoutMain
      title={
        <>
        <Link to="/dashboard/recoverNft" color="textPrimary">
          <Trans>Worker</Trans>
        </Link>
          <RecoverNftHeaderTarget />
        </>
      }
  >
      <Form methods={methods} onSubmit={handleSubmit}>
      <div className="divider-in-columns">
        <Grid spacing={3} alignItems="stretch" container>
        <Grid xs={12} sm={8} md={6} item>

      <Flex flexDirection="column" gap={3}>
        <Switch>
          <Route path={path} exact>
            <RecoverNftSelectFingerprint />
          </Route>
        </Switch>

        <Switch>
          <Route path={path} exact>
            <SelectWorker />
          </Route>
        </Switch>
        {/*
        <Switch>
          <Route path={path} exact>
            <LookForNftCoins />
          </Route>
        </Switch>
        */}
      </Flex>

        </Grid>
          <Grid xs={12} sm={8} md={6} item>
            <div>
            <Trans>Hello</Trans>
            </div>
            <div>
              <Switch>
                <Route path={path} exact>
                  <LoginControl />
                </Route>
              </Switch>
            </div>
            <div>
              <Switch>
                <Route path={path} exact>
                  <ErrorRadios />
                </Route>
              </Switch>
            </div>
          </Grid>

          </Grid>
      </div>
      </Form>


    </LayoutMain>
  )
}
