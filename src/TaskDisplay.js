import React from "react";

const TaskDisplay = ({tasks, deleteHandler}) => {
    const taskDisplay = tasks.map((task, i) => {
        return (
            <div className="box" key={i}>
                <div className="level">
                    <div className="level-left">
                        <p className="title">{task.todo}</p>
                    </div>
                    <div className="level-right">
                        <button
                            className="button is-danger"
                            onClick={() => deleteHandler(i)}
                        >
                            delete
                        </button>
                    </div>
                </div>
            </div>
        )
    });
    return taskDisplay;
};

export default TaskDisplay;
