import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 49
        }
    }

    onClickhandler = (payload) => {
        console.log(this)
        this.setState({number: this.state.number + payload})
    }

    render() {
        return (
            <div className="App">
                <Display value={this.state.number}/>
                <div>
                    <button onClick={() => this.onClickhandler(1)}>증가버튼</button>
                </div>
                <div>
                    <button onClick={() => this.onClickhandler(-1)}>감소버튼</button>
                </div>
            </div>
        );
    }
}

const Display = ({value}) =>
    <div>
        <h1>{value}</h1>
    </div>

export default App;
