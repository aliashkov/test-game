import React from 'react';
import Cell from './Cell';

export default class Board extends React.Component {
    state = {
        boardData: this.initBoardData(this.props.height, this.props.width, this.props.mines),
        mineCount: this.props.mines,
    };

    getRandomNumber(dimension) {
        return Math.floor((Math.random() * 1000) + 1) % dimension;
    }

    initBoardData(height, width, mines) {
        let data = [];
        for (let i = 0; i < height; i++) {
            data.push([]);
            for (let j = 0; j < width; j++) {
                data[i][j] = {
                    isMine: false,
                    x: i,
                    y: j,
                    neighbour: 0,
                };
            }
        }
        data = this.plantMines(data, height, width, mines);
        data = this.getNeighbours(data, height, width);
        console.log(data);
        return data;
    }

    getNeighbours(data, height, width) {
        let updatedData = data, index = 0;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if (data[i][j].isMine !== true) {
                    let mine = 0;
                    const area = this.traverseBoard(data[i][j].x, data[i][j].y, data);
                    area.map(value => {
                        if (value.isMine) {
                            mine++;
                        }
                    });
                    if (mine === 0) {
                        updatedData[i][j].isEmpty = true;
                    }
                    updatedData[i][j].neighbour = mine;
                }
            }
        }

        return (updatedData);
    };

    traverseBoard(x, y, data) {
        const el = [];
        if (x > 0) {
            el.push(data[x - 1][y]);
        }

        if (x < this.props.height - 1) {
            el.push(data[x + 1][y]);
        }

        if (y > 0) {
            el.push(data[x][y - 1]);
        }

        if (y < this.props.width - 1) {
            el.push(data[x][y + 1]);
        }

        if (x > 0 && y > 0) {
            el.push(data[x - 1][y - 1]);
        }

        if (x > 0 && y < this.props.width - 1) {
            el.push(data[x - 1][y + 1]);
        }

        if (x < this.props.height - 1 && y < this.props.width - 1) {
            el.push(data[x + 1][y + 1]);
        }

        if (x < this.props.height - 1 && y > 0) {
            el.push(data[x + 1][y - 1]);
        }

        return el;
    }


    plantMines(data, height, width, mines) {
        let randomx, randomy, minesPlanted = 0;

        while (minesPlanted < mines) {
            randomx = this.getRandomNumber(width);
            randomy = this.getRandomNumber(height);
            if (!(data[randomx][randomy].isMine)) {
                data[randomx][randomy].isMine = true;
                minesPlanted++;
            }
        }

        return (data);
    }

    renderBoard(data) {
        let cell = (dataitem, datarow) => (
            <div key={dataitem.x * datarow.length + dataitem.y}>
                <Cell value={dataitem} />
                {(datarow[datarow.length - 1] === dataitem) ? <div className="clear" /> : ""}
            </div>);
        return data.map((datarow) => datarow.map((dataitem) => cell(dataitem, datarow)));
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