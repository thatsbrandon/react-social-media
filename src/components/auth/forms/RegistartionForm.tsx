import React, { ReactElement } from 'react';
import { Form, Field } from 'react-final-form';

import SPAuthService from '../../../auth/index';
import AuthFormValidator from '../../validators/AuthFormValidator';

import SPRegex from '../../validators/Regexs';

import { 
  BaseAuthInputJSX,
  MasterForm, 
  SubmitAuthFormButton
} from './styles';

interface IRegistrationFormValues {
  username: string
  email: string
  password: string
}

interface IRegistrationFormErrors {
  username: string | null
  email: string | null
  password: string | null
}

const AuthService = new SPAuthService();

const onAuthFormSubmit = (formData: any) => {
  // console.log('Form submit...')
  console.log(formData);
  // AuthService.register(
  //   formData.username,
  //   formData.email,
  //   formData.password,
  //   (user) => {
  //     console.log("new user", user);
  //   },
  //   () => {
  //     console.log("error");
  //   }
  // );
}

const RegistartionForm = (): ReactElement => {
  return (
    <Form 
      onSubmit={onAuthFormSubmit}
      initialValues={{
        username: '',
        email: '',
        password: ''
      }}
      validate={(values: IRegistrationFormValues) => {

        // Errors will have null vaules for each key on first init.
        const errors: IRegistrationFormErrors = {
          username: null,
          email: null,
          password: null
        };

        const username = values.username;
        const email = values.email;
        const password = values.password;

        const usernameRegex = new RegExp(SPRegex.username);
        const emailRegex = new RegExp(SPRegex.email);
        const passordRegex = new RegExp(SPRegex.password);

        if (username && username.length < 5) {
          errors.username = 'Please enter a username larger than 4 characters.';
        } else if (!usernameRegex.test(username)) {
          errors.username = 'Your username you entered was invalid.';
        }

        if (email && emailRegex.test(email)) {
          errors.email = "Your email that you entered in invalid."
        }

        if (password && password.length < 8) {
          errors.password = "Your password is to short, please enter a password that is 8 characters long."
        } else if (!passordRegex.test(password)) {
          errors.password = "Your password you have entered in invalid. Please try another one."
        }

        return errors;

      }}
      render={({handleSubmit, submitting, pristine}) => (
        <MasterForm onSubmit={handleSubmit}>
          <h1 className='form-title-label'>Register an account</h1>
          <Field 
            name="username"
            render={({ input, meta }) => (
              <BaseAuthInputJSX
                input={{...input}} 
                title="Username"
                description="This will be displayed on every post you create."
              />
            )}
          />
          <Field 
            name="email"
            render={({ input, meta }) => (
              <BaseAuthInputJSX 
                input={{...input}}
                title="Email"
                description="This will be used to login to your account."
              />
            )}
          />
          <Field 
            name="password"
            render={({ input, meta }) => (
              <BaseAuthInputJSX 
                input={{...input}}
                title="Password"
                description="Your password will also be used to login to your account."
              />
            )}
          />
          <SubmitAuthFormButton 
            type="submit"
          >
            Submit
          </SubmitAuthFormButton>
        </MasterForm>
      )}
    />
  );
}

export default RegistartionForm;