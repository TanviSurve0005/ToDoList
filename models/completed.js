import CompletedTasks from "../components/CompletedTasks";

const CompletedPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Completed Tasks</h1>
      <CompletedTasks />
    </div>
  );
};

export default CompletedPage;
