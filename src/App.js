import React from 'react';
import TaskAdd from "./TaskAdd";
import TaskDisplay from "./TaskDisplay";

import firebase from "./firebase";
import Login from "./Login";

// firebase auth rule
// allow read, write:if request.auth.uid != null;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            task: '',
            login: true
        };
        if (firebase.auth.currentUser === null) {
            this.state.login = false;
        }
    }

    componentDidMount() {
        const tasks = [...this.state.tasks];

        const firestore = firebase.firestore;
        firestore.collection('tasks').get()
            .then(docs => {
                docs.forEach(doc => {
                    tasks.push({todo: doc.data().todo, id: doc.id});
                });
                this.setState({tasks})
            })
            .catch(e => console.log(e));
    }

    onClickHandler = (e) => {
        e.preventDefault();
        const firestore = firebase.firestore;
        firestore.collection('tasks').add({todo: this.state.task})
            .then(r => {
                const tasks = [...this.state.tasks, {todo: this.state.task, id: r.id}];
                this.setState({
                    tasks,
                    task: ''
                });
            });
    };

    onChangeHandler = (e) => {
        this.setState({
            task: e.target.value
        });
    };

    deleteHandler = (id) => {
        const firestore = firebase.firestore;
        firestore.collection('tasks').doc(id).delete()
            .then(() => {
                const tasks = this.state.tasks.filter((task) => task.id !== id);
                this.setState({tasks});
            })
    };

    render() {
        return (
            <div className="container">
                {this.state.login ?
                    <div>
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
                    :
                    <Login/>
                }
            </div>
        );
    }
}


export default App;
