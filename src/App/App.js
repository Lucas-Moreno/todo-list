import React from "react";
import styled from "styled-components";
import TaskList from "Components/TaskList/TaskList";
import TaskForm from "Components/TaskForm/TaskForm";
import TaskListContextProvider from "Context/TaskListContext";
import Header from "Components/Header/Header";

const Todo = styled.div`
  background: #f0ebe8;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  width: 30vw;
  height: 80vh;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 2rem;
`;

const App = () => {
  return (
    <Todo>
      <Box>
        <TaskListContextProvider>
          <Header />
          <TaskForm />
          <TaskList />
        </TaskListContextProvider>
      </Box>
    </Todo>
  );
};

export default App;
