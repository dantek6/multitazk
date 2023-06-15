import ProgressBar from "@ramonak/react-progress-bar";
import TaskForm from "../components/taskForm";
import Header from "../components/header";

const Group = () => {
  return (
    <div>
      <div>
        <Header />
        <ProgressBar
          completed={50}
          bgColor="#7F8DFF"
          height="50px"
          width="90%"
          labelColor="#e80909"
        />
      </div>
      <div className="col1">
        <div className="groupBox">
          <p>
            <a href="text-editor">Chao</a>
          </p>
        </div>
        <div className="groupBox">
          <p>Chao</p>
        </div>
      </div>
      <div className="col2">
        <TaskForm />
      </div>
    </div>
  );
};

export default Group;
