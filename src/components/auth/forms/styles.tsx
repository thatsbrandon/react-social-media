import styled from 'styled-components';
import React from 'react';

const BaseAuthInputJSX = (authInputProps: any) => {
  return (
    <AuthInputWrapper>
      <AuthTitleLabel>{authInputProps.title}</AuthTitleLabel>
      <AuthDescriptionLabel>{authInputProps.description}</AuthDescriptionLabel>

      <AuthInputBorder>
        <AuthInput
          type="text" 
          id={authInputProps.title}
          name={authInputProps.title}
          autoComplete="off"
          {...authInputProps.input}
        />
      </AuthInputBorder>
    </AuthInputWrapper>
  );
}

const MasterForm = styled.form`
  width: 100%;
  padding-bottom: 1rem;
`;

const AuthInputWrapper = styled.div`
  max-width: 800px;
  padding-bottom: 2rem;
`;

const AuthTitleLabel = styled.label`
  font-weight: 400;
  padding-bottom: 20px;
`;

const AuthDescriptionLabel = styled.p`
  font-weight: 200;
  padding-top: 6px;
  padding-bottom: 18px;
`;

const AuthInputBorder = styled.div`
  max-width: 640px;
  padding: 2px;
  border-radius: 5px;
  background: #212121;
  transition: 0.2s;

  &:focus-within {
    background: rgb(255,95,109);
    background: linear-gradient(90deg, rgba(255,95,109,1) 0%, rgba(255,195,113,1) 100%);
  }
`;

const AuthInput = styled.input`
  max-width: 640px;
  width: 100%;
  border-radius: 5px;
  padding: 1.3rem 1.5rem;
  border: none;
  background-color: #030303;
  color: white;
  outline: none;
  font-weight: 600;
`;

const SubmitAuthFormButton = styled.button`
  max-width: 640px;
  margin-top: 1rem;
  font-weight: 900;
  width: 100%;
  padding: 1.5rem;
  border: none;
  background: rgb(255,95,109);
  background: linear-gradient(90deg, rgba(255,95,109,1) 0%, rgba(255,195,113,1) 100%);
  color: white;
  border-radius: 5px;
  letter-spacing: .2rem;
  transition: all .2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export {
  BaseAuthInputJSX,
  MasterForm,
  SubmitAuthFormButton
};