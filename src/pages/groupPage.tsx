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
      <div className="TaskSelection">
        <div className="TaskSelection__item">
          <img className="Icon043" src="https://via.placeholder.com/127x133" />
          <div className="Tarea110Exp">Tarea 1 <br /><br />+10 exp</div>
        </div>
        <div className="TaskSelection__item">
          <div className="Tarea410Exp">Tarea 4<br /><br />+10 exp</div>
          <img className="Icon044" src="https://via.placeholder.com/127x133" />
        </div>
        <div className="TaskSelection__item">
          <div className="Tarea310Exp">Tarea 3 <br /><br />+10 exp</div>
          <img className="Icon044" src="https://via.placeholder.com/127x133" />
        </div>
        <div className="TaskSelection__item">
          <div className="Tarea210Exp">Tarea 2 <br /><br />+10 exp</div>
          <img className="Icon044" src="https://via.placeholder.com/127x133" />
        </div>
        <div className="TaskSelection__item">
          <div className="Tarea210Exp">Tarea 2 <br /><br />+10 exp</div>
          <img className="Icon044" src="https://via.placeholder.com/127x133" />
        </div>
        <div className="TaskSelection__item">
          <img className="Icon043" src="https://via.placeholder.com/127x133" />
          <div className="Tarea110Exp">Tarea 1 <br /><br />+10 exp</div>
        </div>
      </div>

      {/* <div className="col2">
        <TaskForm />
      </div> */}
    </div>
  );
};

export default Group;
