import React from "react";

const FailedTask = ({data}) => {
  return (
    <div className=" p-5 flex-shrink-0 h-full w-[300px] bg-red-500 rounded-xl text-black">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-200 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-3">{data.description}</p>
      <div className="mt-5">
        <button className="w-full bg-white text-black rounded-md text-sm px-2 py-1">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
