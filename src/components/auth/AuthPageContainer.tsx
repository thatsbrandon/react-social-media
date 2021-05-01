import React, { Component, ReactElement, useState } from 'react';
import styled from 'styled-components';
import AuthForm, { AuthFormType } from './forms/AuthForm';

import Logo from '../assets/logo.svg';
import BaseLink from '../misc/BaseLink';

interface IAuthPageContainerProps {
  title: string;
  subtitle: string;
  formType: AuthFormType;
}

const renderAuthButton = (props: IAuthPageContainerProps): ReactElement => {
  switch (props.formType) {
    case AuthFormType.Register:
      return (
        <BaseLink to='/login'>
          <AuthButtonWrapper>
            <AuthButtonLabel1>Already have an account?</AuthButtonLabel1>
            <AuthButtonLabel2>Login</AuthButtonLabel2>
          </AuthButtonWrapper>
        </BaseLink>
      );
    default:
      return (
        <BaseLink to='/register'>
          <AuthButtonWrapper>
            <AuthButtonLabel1>Need an account?</AuthButtonLabel1>
            <AuthButtonLabel2>Register</AuthButtonLabel2>
          </AuthButtonWrapper>
        </BaseLink>
      );
  }
}

export default function AuthPageContainer(props: IAuthPageContainerProps) {
  return (
    <PageContainer>
        <SideHeader>
          <img src={Logo} alt="logo" height="48" width="23"/>
          <div>
            <HeaderTitle>{props.title}</HeaderTitle>
            <HeaderSubtitle>{props.subtitle}</HeaderSubtitle>
          </div>
          {renderAuthButton(props)}
        </SideHeader>
        <FormWrapper>
          <AuthForm type={props.formType}></AuthForm>
        </FormWrapper>
      </PageContainer>
  )
}


const PageContainer = styled.div`
  position: relative;
  padding: 1.8rem;
  display: flex;
  height: 100vh;
`;

const SideHeader = styled.div`
  display: flex;
  width: 500px;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 2rem;
  background: rgb(255,95,109);
  background: linear-gradient(0deg, rgba(255,95,109,1) 0%, rgba(255,195,113,1) 100%);
  height: 100%;
  border-radius: 5px;
`;

const HeaderTitle = styled.p`
  font-weight: 700;
  font-size: 1.7rem;
  letter-spacing: .15rem;
  line-height: 2.2rem;
  max-width: 550px;
`;

const HeaderSubtitle = styled.p`
  padding-top: 1.3rem;
  font-weight: 300;
  font-size: 1.13rem;
  max-width: 400px;
  letter-spacing: .1rem;
  line-height: 1.8rem;
`;

const AuthButtonWrapper = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2rem 1rem;
  border-radius: 5px;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    background: white;
    color: black;
    box-shadow: 0px 1px 10px rgba(146, 146, 146, 0.4);
  }
`;

const AuthButtonLabel1 = styled.p`
  font-weight: 400;
  font-size: 1rem;
`;

const AuthButtonLabel2 = styled.p`
  font-weight: 700;
  font-size: 1.1rem;
  padding-top: 6px;
`;

// Form

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5.5rem;
`;