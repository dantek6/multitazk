import ProgressBar from "@ramonak/react-progress-bar";
import TaskForm from "../components/taskForm";
import Header from "../components/header";
import { useGroup } from "../context/groupContext";
import { useTask } from "../context/taskContext";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { getOneGroup } from "../components/types/types";

const Group = () => {
  const { getGroup, groups } = useGroup();
  const { getTasks, tasks } = useTask();
  const { _id } = useParams();
  const [groupData, setGroupData] = useState<getOneGroup | null>(null);

  if (_id) {
    useEffect(() => {

      const fetchGroupData = async () => {
        try {
          const groupData = await getGroup(_id);
          if (groupData) {
            setGroupData(groupData);
            getTasks().then(() => {
              console.log('tasks loaded:', tasks);
            });
          }
        } catch (error: any) {
          console.log(error);
        }
      };

      fetchGroupData();
    }, []);

  }

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
        {groupData && groupData.tasksId.map((taskId, index) => (
          <div key={index} className="TaskSelection__item">
            <img src={`https://via.placeholder.com/127x133?text=Tarea+${taskId}`} alt={`Tarea ${taskId}`} />
            <div className="Tarea110Exp"> tasks[index].title <br /><br />+tasks[index].points points</div>
          </div>
        ))}
      </div>

      {/* <div className="col2">
        <TaskForm />
      </div> */}
    </div>
  );
};

export default Group;
