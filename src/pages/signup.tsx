import React, { useState } from "react";
import { useSignUp } from "../hooks/use-sign-up";
import AuthForm from '@/src/common/form'

export default function Signup() {
  const { authSignUp } = useSignUp();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [last_name, setLastName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleAuthentification = async () => {
    try {
      console.log("Before signIn");
      setError("");
      if (!email || !password) {
        setError("Please fill in all the required values");
        return;
      }
      const resp = authSignUp({ email, password, name, last_name });
      console.log("After signup");
      console.log(resp);
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
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleAuthentification={handleAuthentification}
        error={error}
        showPassword={showPassword}
        togglePasswordVisibility={togglePasswordVisibility}
        name={name}
        lastName={last_name}
        setName={setName}
        setLastName={setLastName}
      />
    </div>
  );
}