import React from "react";

const TaskListData = ({ data }) => {
  return (
    <div className="mt-10 flex flex-wrap gap-6 text-white">
      {/* New Task Card */}
      <div className="flex-1 min-w-[250px] p-6 rounded-xl bg-blue-600 shadow-lg hover:scale-105 transition-transform duration-200">
        <div className="flex items-center justify-between">
          <h2 className="text-5xl font-extrabold">{data.taskCount.newTask}</h2>
          <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center">
            <span className="text-2xl font-semibold">🆕</span>
          </div>
        </div>
        <h3 className="text-lg font-medium mt-4">New Task</h3>
      </div>

      {/* Completed Task Card */}
      <div className="flex-1 min-w-[250px] p-6 rounded-xl bg-emerald-600 shadow-lg hover:scale-105 transition-transform duration-200">
        <div className="flex items-center justify-between">
          <h2 className="text-5xl font-extrabold">{data.taskCount.completed}</h2>
          <div className="w-12 h-12 rounded-full bg-emerald-400 flex items-center justify-center">
            <span className="text-2xl font-semibold">✅</span>
          </div>
        </div>
        <h3 className="text-lg font-medium mt-4">Completed Task</h3>
      </div>

      {/* Accepted Task Card */}
      <div className="flex-1 min-w-[250px] p-6 rounded-xl bg-yellow-500 shadow-lg hover:scale-105 transition-transform duration-200">
        <div className="flex items-center justify-between">
          <h2 className="text-5xl font-extrabold">{data.taskCount.active}</h2>
          <div className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center">
            <span className="text-2xl font-semibold">📋</span>
          </div>
        </div>
        <h3 className="text-lg font-medium mt-4">Accepted Task</h3>
      </div>

      {/* Failed Task Card */}
      <div className="flex-1 min-w-[250px] p-6 rounded-xl bg-red-600 shadow-lg hover:scale-105 transition-transform duration-200">
        <div className="flex items-center justify-between">
          <h2 className="text-5xl font-extrabold">{data.taskCount.failed}</h2>
          <div className="w-12 h-12 rounded-full bg-red-400 flex items-center justify-center">
            <span className="text-2xl font-semibold">❌</span>
          </div>
        </div>
        <h3 className="text-lg font-medium mt-4">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListData;
