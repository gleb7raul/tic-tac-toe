class TicTacToe {
    constructor() {
      this._field = [];
      this._rowsCols = 3;
      this._numCells = this._rowsCols * this._rowsCols;
      this.createField();
      this._curSymbol = 'x';
      this._isFinished = false;
      this._numOfTurn = 0;
      this._winner = null;
    }

    getCurrentPlayerSymbol() {
      return this._curSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
      if (this._field[rowIndex][columnIndex] !== null){
        return;
      }
      this._field[rowIndex][columnIndex] = this._curSymbol;

      for (let i = 0; i < this._field.length; i++){
        if((this._field[i][0] == this._curSymbol) && (this._field[i][1] == this._curSymbol) && (this._field[i][2] == this._curSymbol)){
          this._isFinished = true;
          this._winner = this._curSymbol;
        }else if((this._field[0][i] == this._curSymbol) && (this._field[1][i] == this._curSymbol) && (this._field[2][i] == this._curSymbol)){
          this._isFinished = true;
          this._winner = this._curSymbol;
        }else if((this._field[0][0] == this._curSymbol) && (this._field[1][1] == this._curSymbol) && (this._field[2][2] == this._curSymbol)){
          this._isFinished = true;
          this._winner = this._curSymbol;
        }else if((this._field[2][0] == this._curSymbol) && (this._field[1][1] == this._curSymbol) && (this._field[0][2] == this._curSymbol)){
          this._isFinished = true;
          this._winner = this._curSymbol;
        }
      }

      this.changeSymbol(rowIndex, columnIndex);

      if(this._numCells - this._numOfTurn === 0){
        this._isFinished = true;
      }
    }

    isFinished() {
      return this._isFinished;
    }

    getWinner() {
      return this._winner;
    }

    noMoreTurns() {
      if (this._numCells - this._numOfTurn != 0){
        return false;
      }else{
        return true;
      }
    }

    isDraw() {
      if(this._isFinished && !this._winner){
        return true;
      }else{
        return false;
      }
    }

    getFieldValue(rowIndex, colIndex) {
      return this._field[rowIndex][colIndex];
    }

    createField(){
      for (let i = 0; i < this._rowsCols; i++) {
          this._field[i] = []
          for (let j = 0; j < this._rowsCols; j++) {
              this._field[i][j] = null;
          }
      }
    }

    changeSymbol(rowIndex, columnIndex){
      this._numOfTurn++;
      if (this._numOfTurn % 2 == 0){
        this._curSymbol = 'x';
      }else{
        this._curSymbol = 'o';
      }
    }

}

module.exports = TicTacToe;
