import React from "react";

const CompleteTask = ({data}) => {
  return (
    <div className=" p-5 flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-3">{data.description}</p>
      <div className="mt-6">
        <button className="bg-white text-black w-full rounded-md">
          Complete
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
