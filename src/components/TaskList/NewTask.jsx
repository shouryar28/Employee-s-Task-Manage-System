import React from "react";

const NewTask = ({data}) => {
  return (
    <div className=" p-5 flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-3">{data.description}</p>
      <div className="mt-5 flex justify-center">
        <button className="bg-white text-black px-2 py-1 text-sm rounded-md w-full">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
