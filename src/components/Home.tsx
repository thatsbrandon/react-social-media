import React, { Component } from 'react'
import styled from 'styled-components';
import { Container } from './styles';

import firebase from '../firebase';

export default class Home extends Component {
  render() {
    return (
      <AppContainer>
        Application
      </AppContainer>
    );
  }
}

const AppContainer = styled(Container)`
  border: 1px solid rgb(47, 51, 54);
`;
