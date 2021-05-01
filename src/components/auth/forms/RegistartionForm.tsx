import React, { ReactElement } from 'react';
import { Form, Field } from 'react-final-form';

import { 
  BaseAuthInputJSX,
  MasterForm, 
  FormTitleLabel,
  SubmitAuthFormButton
} from './styles';

const onAuthFormSubmit = (formData: any) => {
  console.log('Form submit...')
  console.log(formData);
}

const RegistartionForm = (): ReactElement => {
  return (
    <Form 
      onSubmit={onAuthFormSubmit}
      render={({handleSubmit}) => (
        <MasterForm onSubmit={handleSubmit}>
          <FormTitleLabel>Register an account</FormTitleLabel>
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
          <SubmitAuthFormButton type="submit">
            Submit
          </SubmitAuthFormButton>
        </MasterForm>
      )}
    />
  );
}

export default RegistartionForm;