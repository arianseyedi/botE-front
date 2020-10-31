import React, { useEffect, useState } from 'react'

import LoginPageView, { LoginPageBaseProps, LoginPageState, LoginPageValidationState } from './LoginPageView.route'





const defaultState: LoginPageState = {
  validation: {
    overall: true
  }
}

export interface LoginPageProps extends LoginPageBaseProps { }

const LoginPageContainer: React.FC<LoginPageProps> = props => {
  const [state, setState] = useState<LoginPageState>(defaultState);
  useEffect(() => {
    if (state.email && state.password) {
      const validationRes = validateForm(state.email, state.password)
      setState({
        ...state,
        ...validationRes
      })
    }
  }, [state.email, state.password])

  function validateForm(email: string, password: string): LoginPageValidationState {
    const emailError = email.length > 0
    const passwordError = password.length > 0
    return {
      overall: !(emailError || passwordError),
      invalidPassword: passwordError ? { reason: 'length' } : undefined,
      invalidUsername: emailError ? { reason: 'length' } : undefined
    };
  }

  function handleSubmit(event: any) {
    event.preventDefault();
  }

  function handleEmailChange(event: any) {
    setState({ ...state, email: event.target.value })
  }

  function handlePasswordChange(event: any) {
    setState({ ...state, password: event.target.value })
  }

  return <LoginPageView {...props} onEmailChange={handleEmailChange} onPasswordChange={handlePasswordChange} email={state.email} password={state.password} validation={state.validation} />
}

export default LoginPageContainer
