import { useState } from "react";
import useApi from "../../hooks/useApi";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = props => {
  const { isLoading, error, sendReq } = useApi();

  const enterTaskHandler = async taskText => {
    const createTask = taskData => {
      const generatedId = taskData.name;
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    };

    sendReq(
      {
        url: "https://react-http-fc3c5-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { text: taskText },
      },
      createTask
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
