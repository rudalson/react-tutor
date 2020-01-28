import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 49
        }
    }

    onClickhandler() {
        console.log(this);
        this.state.number++;
    }

    render() {
        return (
            <div className="App">
                <Display value={this.state.number}/>
                <div>
                    <button onClick={this.onClickhandler}>증가버튼</button>
                </div>
                <div>
                    <button>감소버튼</button>
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
