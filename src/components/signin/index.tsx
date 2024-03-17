import AuthForm from '@/src/common/form'
import { useSignInMutation } from '@/src/hooks/use-sign-in';
import React, { useState } from 'react'

export const SignIn: React.FC = () => {
  const { authMutate } = useSignInMutation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleAuthentification = async () => {
    try {
      setError("");
      if (!email || !password) {
        setError("Please fill in all the required values");
        return;
      }
      const resp = await authMutate({ email, password });
      return resp;
    } catch (err) {
      console.error("Error during login:", err);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <AuthForm
        signIn={true}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleAuthentification={handleAuthentification}
        error={error}
        showPassword={showPassword}
        togglePasswordVisibility={togglePasswordVisibility} />
    </div>
  )
}
