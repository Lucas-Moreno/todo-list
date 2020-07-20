import React, { useContext } from "react";
import { TaskListContext } from "Context/TaskListContext";
import Task from "Components/Task/Task";
import styled from "styled-components";

const Center = styled.p`
  text-align: center;
`;

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      {tasks.length ? (
        <ul>
          {tasks.map(task => {
            return <Task task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <Center>Aucune Tâches</Center>
      )}
    </div>
  );
};

export default TaskList;
