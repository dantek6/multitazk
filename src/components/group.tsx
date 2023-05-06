import ProgressBar from "./progressBar";
import TaskForm from "../components/taskForm";

const Group = () => {
  return (
    <div>
      <div>
        <ProgressBar />
      </div>
      <div className="col1">
        <div className="groupBox">
          <p><a href="text-editor">Chao</a></p>
        </div>
        <div className="groupBox">
          <p>Chao</p>
        </div>
      </div>
      <div className="col2">
        <TaskForm/>
      </div>
    </div>
  );
};

export default Group;
