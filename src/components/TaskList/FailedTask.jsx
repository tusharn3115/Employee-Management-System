import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="w-[350px] p-6 bg-slate-800 rounded-2xl shadow-lg flex flex-col justify-between text-white">
      {/* Category and Date */}
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold px-3 py-1 rounded-full bg-blue-600">
          {data.category}
        </span>
        <span className="text-xs font-medium text-gray-300">{data.date}</span>
      </div>

      {/* Title */}
      <h2 className="mt-4 text-xl font-bold text-gray-100">{data.title}</h2>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-400 leading-relaxed">
        {data.description}
      </p>

      {/* Failed Button */}
      <div className="mt-6">
        <button className="w-full py-2 bg-red-700 rounded-lg font-medium text-sm hover:bg-red-600 active:scale-95 transition duration-150">
          ❌ Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
