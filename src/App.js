import React from 'react';
import TaskAdd from "./TaskAdd";
import TaskDisplay from "./TaskDisplay";

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
            <div className="container">
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


export default App;
