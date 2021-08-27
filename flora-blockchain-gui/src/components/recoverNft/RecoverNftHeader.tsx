import React, { ReactNode} from "react";
import { Trans } from "@lingui/macro";
import {MenuItem, Box, ListItemIcon, Typography, List, ListItemText,
  ListItemSecondaryAction, Tooltip, IconButton, Card, ListItem, Container,} from '@material-ui/core';
import {Refresh as RefreshIcon, Folder as FolderIcon,
  Add as AddIcon, Visibility as VisibilityIcon, Delete as DeleteIcon,
} from '@material-ui/icons';
import {createTeleporter} from "react-teleporter";
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {Button, Flex, Logo} from "@flora/core";
import LayoutHero from '../layout/LayoutHero';
import useOpenDialog from "../../hooks/useOpenDialog";
import {RootState} from "../../modules/rootReducer";
import Fingerprint from "../../types/Fingerprint";
import {selectFingerprint,} from "../../modules/message";

type Props = {
  children?: ReactNode;
};

const RecoverNftHeaderTeleporter = createTeleporter();

export const RecoverNftHeaderSource = RecoverNftHeaderTeleporter.Source;

export const RecoverNftHeaderTarget = RecoverNftHeaderTeleporter.Target;

export default function RecoverNft(props: Props) {
  const { children } = props;


  // return (
  //  <LayoutHero>
  //    <Container maxWidth="xs">
  //     <Flex flexDirection="column" alignItems="center" gap={3}>
  //        <Logo width={130} />
  //        {hasFingerprints ? (
  //          <Typography variant="h5" component="h1" gutterBottom>
  //            <Trans>Select Key</Trans>
  //          </Typography>
  //        ) : (
  //          <>
  //            <Typography variant="h5" component="h1" gutterBottom>
  //              <Trans>Sign in</Trans>
  //            </Typography>
  //            <Typography variant="subtitle1">
  //              <Trans>
  //                Welcome to Flora. Please log in with an existing key, or create
  //                a new key.
  //              </Trans>
  //            </Typography>
  //          </>
  //        )}
  //        <Flex
  //          flexDirection="column"
  //          gap={3}
  //          alignItems="stretch"
  //          alignSelf="stretch"
  //        >
  //          {hasFingerprints && (
  //            <Card>
  //              <List>
  //                {publicKeyFingerprints.map((fingerprint: Fingerprint) => (
  //                  <StyledFingerprintListItem
  //                    onClick={() => handleClick(fingerprint)}
  //                  key={fingerprint}
  //                  button
  //                  >
  //                    <ListItemText
  //                      primary={
  //                        <Trans>
  //                          Private key with public fingerprint {fingerprint}
  //                        </Trans>
  //                      }
  //                      secondary={<Trans>Secondary</Trans>}
  //                      />
  //                  </StyledFingerprintListItem>
  //                  ))}
  //              </List>
  //            </Card>
  //          )}
  //        </Flex>
  //      </Flex>
  //    </Container>
  //  </LayoutHero>
  //    );
}
