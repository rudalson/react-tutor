import React from "react";

const TaskDisplay = ({tasks, deleteHandler}) => {
    const taskDisplay = tasks.map((task, i) => {
        return (
            <div key={i}>
                <p>{task.todo}</p>
                <button onClick={() => deleteHandler(i)}>delete</button>
            </div>
        )
    });
    return taskDisplay;
};

export default TaskDisplay;
