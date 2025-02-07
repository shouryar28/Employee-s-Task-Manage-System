import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div className=" p-5 flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl text-black">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-3">{data.description}</p>
      <div className="flex justify-center mt-4">
        <button className="bg-white text-black py-1 px-2 text-sm m-1 rounded-md">
          Mark as Completed
        </button>
        <button className="bg-white text-black py-1 px-2 text-sm m-1 rounded-md">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
