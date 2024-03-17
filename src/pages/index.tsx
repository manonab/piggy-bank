import { NextPage } from "next"
import React, { useContext } from "react"
import { SignIn } from "../components/signin";
import { UserContext } from "../context/user-context";
import Dashboard from "./dashboard";

const HomePage: NextPage = () => {
  const { authenticated, user } = useContext(UserContext);
  console.log(user)
  return (
    <div>
      {authenticated && user ?
        <Dashboard />
        :
        <SignIn />
      }
    </div>)
};
export default HomePage;