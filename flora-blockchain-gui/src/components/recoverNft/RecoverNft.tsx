import React from "react";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import {Flex, Link} from "@flora/core";
import { Trans } from "@lingui/macro";
import RecoverNftSelectFingerprint
  from "../recoverNft/RecoverNftSelectFingerprint";
import LayoutMain from "../layout/LayoutMain";
import { RecoverNftHeaderTarget } from "./RecoverNftHeader";
import LookForNftCoins from "../recoverNft/RecoverNftInputText";
import SelectWorker from "../recoverNft/workerSelect";



export default function RecoverNft() {
  const { path } = useRouteMatch();

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

      <Flex flexDirection="column" gap={3}>
        <Switch>
          <Route path={path} exact>
            <RecoverNftSelectFingerprint />
          </Route>
        </Switch>
        <Switch>
          <Route path={path} exact>
            <LookForNftCoins />
          </Route>
        </Switch>
          <Switch>
            <Route path={path} exact>
              <SelectWorker />
            </Route>
          </Switch>
      </Flex>

    </LayoutMain>
  )
}
