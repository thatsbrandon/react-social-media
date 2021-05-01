import React, { Component } from 'react'

import { AuthFormType } from './forms/AuthForm'
import AuthPageContainer from './AuthPageContainer';

export default class LoginPage extends Component {
  render() {
    return (
      <AuthPageContainer 
      title="Welcome back, old friend!" 
      subtitle="Log back in to continue making history on your page!"
      formType={AuthFormType.Login}
      />
    )
  }
}
