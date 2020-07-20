import React, { useContext } from "react";
import { TaskListContext } from "Context/TaskListContext";
import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
   padding: 0.5em 1.5em;
   margin: 0 0.3em 0.3em 0;
   border-radius: 2em;
   box-sizing: border-box;
   text-decoration: none;
   color: #ffffff;
   background-color: #4eb5f1;
   text-align: center;
   transition: all 0.2s;
  border: none;
  &:hover {
    background-color: #4095c6;
  }
`;

const TaskContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext);
  return (
    <TaskContainer>
      <span>{task.title}</span>
      <div>
        <Button onClick={() => removeTask(task.id)}>supprimer</Button>
        <Button onClick={() => findItem(task.id)}>modifier</Button>
      </div>
    </TaskContainer>
  );
};

export default Task;
