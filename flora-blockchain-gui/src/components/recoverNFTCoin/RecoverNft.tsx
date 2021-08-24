import React from "react";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import LayoutMain from "../layout/LayoutMain";
import NftCoinStatus from "../../constants/NftCoinStatus";
import {Link} from "@flora/core";
import { Trans } from "@lingui/macro";
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

          </Route>
        </Switch>
      </Flex>
    </LayoutMain>
  )

}
