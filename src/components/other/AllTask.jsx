import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);


  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-100">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded ">
        <h2 className="font-bold text-lg w-1/5 text-black">Employee Name</h2>
        <h3 className="font-bold text-lg w-1/5">New Task</h3>
        <h5 className="font-bold text-lg w-1/5">Active Task</h5>
        <h5 className="font-bold text-lg w-1/5">Completed</h5>
        <h5 className="font-bold text-lg w-1/5">Failed</h5>
      </div>

      <div className="h-[80%]">
        {userData.map(function (elem, idx) {
          return (
            <div key={idx} className=" mb-2 py-2 px-4 flex justify-between rounded border ">
              <h2 className="text-lg w-1/5 font-extrabold text-m">{elem.name}</h2>
              <h3 className="text-lg w-1/5 text-blue-500 font-bold">{elem.taskCount.newTask}</h3>
              <h5 className="text-lg w-1/5 text-white font-bold ">{elem.taskCount.active}</h5>
              <h5 className="text-lg w-1/5 text-green-400 font-bold">{elem.taskCount.completed}</h5>
              <h5 className="text-lg w-1/5 text-red-500 font-bold">{elem.taskCount.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AllTask;
