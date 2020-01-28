import React from 'react';
import './App.css'
import Button from './Button';
import Display from './Display';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 49
        }
    }

    onClickhandler = (payload) => {
        this.setState({number: this.state.number + payload});
    }

    render() {
        return (
            <div className="container has-text-centered">
                <Display value={this.state.number}/>
                <Button className="button is-primary is-fullwidth" clickHandler={() => this.onClickhandler(1)}>증가버튼</Button>
                <Button className="button is-info is-fullwidth" clickHandler={() => this.onClickhandler(-1)}>감소버튼</Button>
            </div>
        );
    }
}

export default App;
