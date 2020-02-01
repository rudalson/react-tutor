import React from 'react';

class App extends React.Component {
    state = {
        tasks: [
            {todo: '할일 1'},
            {todo: '할일 2'},
        ],
        task: ''
    };

    onClickHandler = (e) => {
        e.preventDefault();
        const task = {todo: this.state.task};
        const tasks = [...this.state.tasks, task];
        this.setState({
            tasks,
            task: ''
        });
        console.log(this.state.tasks);
    };

    onChangeHandler = (e) => {
        this.setState({
            task: e.target.value
        });
    };

    deleteHandler = (idx) => {
        const tasks = this.state.tasks.filter((task, i) => i !== idx);
        this.setState({tasks});
    };

    render() {
        return (
            <div className="App">
                <TaskAdd
                    value={this.state.task}
                    changeHandler={this.onChangeHandler}
                    clickHandler={this.onClickHandler}
                />
                <div>
                    <TaskDisplay
                        tasks={this.state.tasks}
                        deleteHandler={this.deleteHandler}
                    />
                </div>
            </div>
        );
    }
}

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

const TaskAdd = ({value, changeHandler, clickHandler}) => {
    return (
        <div>
            <form>
                <input value={value} onChange={changeHandler}/>
                <button onClick={clickHandler}>저장</button>
            </form>
        </div>
    )
};

export default App;
