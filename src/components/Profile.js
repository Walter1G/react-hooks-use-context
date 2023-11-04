import React, { useContext } from "react";
import Interests from "./Interests";

//import the user context we created
import { UserContext } from "../context/user";


function Profile({ theme }) {
  //call useContext with our UserContext
  const user = useContext(UserContext);
  console.log(user);


  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} theme={theme} />
    </div>
  );
}

export default Profile;
