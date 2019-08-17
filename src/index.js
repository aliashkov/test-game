import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import './index.css';

class Game extends React.Component {
    state = {
        height: 8,
        width: 8,
        mines: 15,
    };

    render() {
        return (
            <div className="game">
                <div className="game-info" />
                <Board height={this.state.height} width={this.state.width}  mines={this.state.mines} />
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('root'));
