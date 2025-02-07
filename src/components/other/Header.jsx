import React, { createContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Header = (props) => {
  // const [userName, setUserName] = useState('');

  // if(!data){
  //   setUserName('Admin')
  // }
  // else{
  //   setUserName(data.name)
  // }
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser('')
    // window.location.reload();
  };
  
  

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello
        <br />
        <span className="text-3xl font-semibold">user</span>👋
      </h1>

      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
