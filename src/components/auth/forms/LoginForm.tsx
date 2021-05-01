import React, { ReactElement } from 'react';
import { Form, Field } from 'react-final-form';

import { 
  BaseAuthInputJSX,
  MasterForm, 
  FormTitleLabel,
  SubmitAuthFormButton
} from './styles';

const onAuthFormSubmit = (formData: any) => {
  console.log('Login form to be submitted...')
  console.log(formData);
};

const LoginForm = () => (
  <Form
    onSubmit={onAuthFormSubmit}
    render={({ handleSubmit }) => (
      <MasterForm onSubmit={handleSubmit}>
        <FormTitleLabel>Login</FormTitleLabel>
        <Field
          name="email"
          render={({ input, meta }) => (
            <BaseAuthInputJSX 
              input={{...input}}
              title="Email"
              description="Your email that you used while creating an account."
            />
          )}
        />
        <Field 
          name="password"
          render={({input, meta}) => (
            <BaseAuthInputJSX 
              input={{...input}}
              title="Password"
              description="Your password you used when creating an account."
            />
          )}
        />
        <SubmitAuthFormButton type="submit">
          Submit
        </SubmitAuthFormButton>
      </MasterForm>
    )}
  />
);

export default LoginForm;