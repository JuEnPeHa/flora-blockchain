import React from "react";
import { t } from '@lingui/macro';
import { Box, IconButton, Paper } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Form, InputBase } from '@flora/core';
import { useForm } from 'react-hook-form';

const StyledInputBase = styled(InputBase)`
  min-width: 15rem;
`;

type FormData = {
  hash: string;
};

