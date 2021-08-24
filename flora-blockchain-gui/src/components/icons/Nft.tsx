import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as NftIcon } from './images/nft.svg';

export default function Nft(props: SvgIconProps) {
  return <SvgIcon component={NftIcon} viewBox="0 0 32 39" {...props} />;
}
