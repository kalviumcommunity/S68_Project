import TaskCard from "./components/TaskCard";

const dummyTask = {
  title: "Complete React Component",
  description: "Create and render a component for ASAP project",
  status: "Pending",
};

function App() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">ASAP Project</h1>
      <TaskCard task={dummyTask} />
    </div>
  );
}

export default App;
