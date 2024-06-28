"use client";

const CompletedTask = ({ completedTasks }) => {
  return (
    <>
      <h2 className="mt-8 text-xl font-bold">Completed Tasks</h2>
      {completedTasks.map((task) => (
        <div key={task._id} className="py-3 flex flex-col justify-center items-center w-[800px]">
          <div className="p-3 border border-slate-300 flex justify-between gap-5 items-start w-full rounded-[15px] bg-[#d3d3d3]">
            <div>
              <h2 className="font-bold text-[20px] pl-5">{task.title}</h2>
              <div className="pl-5">{task.description}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CompletedTask;
