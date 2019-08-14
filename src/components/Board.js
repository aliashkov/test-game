import React from 'react';
import Cell from './Cell';

export default class Board extends React.Component {
    state = {
        boardData: this.initBoardData(this.props.height, this.props.width),
    };

    initBoardData(height, width) {
        let data = [];
        for (let i = 0; i < height; i++) {
            data.push([]);
            for (let j = 0; j < width; j++) {
                data[i][j] = {
                    x: i,
                    y: j,
                };
            }
        }
        console.log(data);
        return data;
    }

    renderBoard(data) {
        return data.map((datarow) => {
            return datarow.map((dataitem) => {
                return (
                    <div key={dataitem.x * datarow.length + dataitem.y}>
                        <Cell
                            value={dataitem}
                        />
                        {(datarow[datarow.length - 1] === dataitem) ? <div className="clear" /> : ""}
                    </div>);
            })
        });
    }


    render() {
        return (
            <div className="board">
            {
                this.renderBoard(this.state.boardData)
            }
            </div>
        );
    }
}