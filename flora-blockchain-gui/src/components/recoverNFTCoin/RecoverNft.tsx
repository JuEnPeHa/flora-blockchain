import React from "react";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import {Flex, Link} from "@flora/core";
import { Trans } from "@lingui/macro";
import FarmLatestBlockChallenges from "@flora/farm/FarmLatestBlockChallenges";
import LayoutMain from "../layout/LayoutMain";
import NftCoinStatus from "../../constants/NftCoinStatus";
import { RecoverNftHeaderTarget } from "./RecoverNftHeader";

export default function RecoverNft() {
  const { path } = useRouteMatch();

  return (
    <LayoutMain
      title={
        <>
        <Link to="/dashboard/recoverNft" color="textPrimary">
          <Trans>RecoverNft</Trans>
        </Link>
          <RecoverNftHeaderTarget />
        </>
      }
  >
      <Flex flexDirection="column" gap={3}>
        <Switch>
          <Route path={path} exact>
            <FarmLatestBlockChallenges />
          </Route>
        </Switch>
      </Flex>
    </LayoutMain>
  )
}
