import React, { Component } from 'react'
import styled from 'styled-components';

import { AuthFormType } from './forms/AuthForm';
import AuthPageContainer from './AuthPageContainer';

export default class RegisterPage extends Component {
  render() {
    return (
      <AuthPageContainer
       title="A few clicks away from starting your own social page" 
       subtitle="Join now and start posting content for all viewers and friends to read and see."
       formType={AuthFormType.Register}
      />
    );
  }
}



