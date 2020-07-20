import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "Context/TaskListContext";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 2rem;
  margin-bottom: 2rem;
`;
const Input = styled.input`
  padding: 10px;
  margin-bottom: 2rem;
  width: 95%;
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
`;

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

const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(
    TaskListContext
  );
  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };

  const handleChange = e => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      console.log(editItem);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <Form onSubmit={handleSubmit} className="form">
      <Input
        onChange={handleChange}
        value={title}
        type="text"
        placeholder="Ajouter une tâche"
        required
      />
      <ContainerButtons>
        <Button type="submit">
          {editItem ? "Modifier la tâche" : "Ajouter une tâche"}
        </Button>
        <Button onClick={clearList}>Enlever</Button>
      </ContainerButtons>
    </Form>
  );
};

export default TaskForm;
