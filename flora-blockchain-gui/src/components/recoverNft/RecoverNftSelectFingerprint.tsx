import {
  Card,
  Container,
  List, ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";
import {Flex, Logo} from "@flora/core";
import {Trans} from "@lingui/macro";
import React from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import LayoutHero from "../layout/LayoutHero";
import Fingerprint from "../../types/Fingerprint";
import useOpenDialog from "../../hooks/useOpenDialog";
import {RootState} from "../../modules/rootReducer";
import {selectFingerprint} from "../../modules/message";

const StyledFingerprintListItem = styled(ListItem)`
  padding-right: ${({ theme }) => `${theme.spacing(11)}px`};
`;

export default function RecoverNftSelectFingerprint(){
  const history = useHistory();
  const dispatch = useDispatch();
  const openDialog = useOpenDialog();

  const publicKeyFingerprints = useSelector(
    (state: RootState) => state.wallet_state.public_key_fingerprints,
  );
  const hasFingerprints =
    publicKeyFingerprints && !!publicKeyFingerprints.length;
  function handleClick(fingerprint: Fingerprint){
    dispatch(selectFingerprint(fingerprint));
  }


  return (
    <LayoutHero>
      <Container maxWidth="xs">
        <Flex flexDirection="column" alignItems="center" gap={3}>
          <Logo width={130} />
          {hasFingerprints ? (
            <Typography variant="h5" component="h1" gutterBottom>
              <Trans>Select Key</Trans>
            </Typography>
          ) : (
            <>
              <Typography variant="h5" component="h1" gutterBottom>
                <Trans>Sign in</Trans>
              </Typography>
              <Typography variant="subtitle1">
                <Trans>
                  Welcome to Flora. Please log in with an existing key, or create
                  a new key.
                </Trans>
              </Typography>
            </>
          )}
          <Flex
            flexDirection="column"
            gap={3}
            alignItems="stretch"
            alignSelf="stretch"
          >
            {hasFingerprints && (
              <Card>
                <List>
                  {publicKeyFingerprints.map((fingerprint: Fingerprint) => (
                    <StyledFingerprintListItem
                      onClick={() => handleClick(fingerprint)}
                      key={fingerprint}
                      button
                    >
                      <ListItemText
                        primary={
                          <Trans>
                            Private key with public fingerprint {fingerprint}
                          </Trans>
                        }
                        secondary={<Trans>Secondary</Trans>}
                      />
                    </StyledFingerprintListItem>
                  ))}
                </List>
              </Card>
            )}
          </Flex>
        </Flex>
      </Container>
    </LayoutHero>
  );
}
