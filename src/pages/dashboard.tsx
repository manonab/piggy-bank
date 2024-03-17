import { NextPage } from 'next';
import React from 'react'
import { useUser } from '../queries/user';


const Dashboard: NextPage = () => {
  const { userData } = useUser();
  return (
    <div>
      <p>Welcome {userData?.name}</p>
    </div>
  )
}
export default Dashboard;