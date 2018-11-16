/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  let board = new Board({n});
  let firstSolution = function(rowIdx) {

    if (rowIdx === n) {
      return board.rows();
    }

    for (let colIdx = 0; colIdx < n; colIdx++) {
      board.togglePiece(rowIdx, colIdx);
      if (!board.hasAnyRooksConflicts()) {
        return firstSolution(rowIdx + 1);
      }
      board.togglePiece(rowIdx, colIdx);
    }
  };

  return firstSolution(0);
  
};

window.countNRooksSolutions = function(n) {
  let board = new Board({n});
  let solutionCount = 0;

  let firstSolution = function( rowIdx) {

    if (rowIdx === n) {
      solutionCount++;
      return;
    }

    for (let colIdx = 0; colIdx < n; colIdx++) {
      board.togglePiece(rowIdx, colIdx);
      if (!board.hasAnyRooksConflicts()) {
        firstSolution(rowIdx + 1);
      }
      board.togglePiece( rowIdx, colIdx);
    }
  };

  firstSolution(0);
  return solutionCount;
};

window.findNQueensSolution = function(n) {
  let board = new Board({n});

  if (n == 0 || n === 2 || n === 3) {
    return new Board({n}).rows();
  }

  let firstSolution = function(rowIdx, piecesLeft) {

    if (rowIdx === n) {
      return piecesLeft === 0 ? true : false;
    }    

    for (let colIdx = 0; colIdx < n; colIdx++) {
      board.togglePiece(rowIdx, colIdx);
      if (!board.hasAnyQueensConflicts()) {
      
        let attempt = firstSolution(rowIdx + 1, piecesLeft - 1);
        if (attempt) { return board.rows(); }

      }
      board.togglePiece(rowIdx, colIdx);
    }
  };

  return firstSolution(0, n);
};

window.countNQueensSolutions = function(n) {
  let board = new Board({n});
  let solutionCount = 0;

  let firstSolution = function(rowIdx) {

    if (rowIdx === n) {
      solutionCount++;
      return;
    }

    for (let colIdx = 0; colIdx < n; colIdx++) {
      board.togglePiece(rowIdx, colIdx);
      if (!board.hasAnyQueensConflicts()) {
        firstSolution(rowIdx + 1);
      } 
      board.togglePiece(rowIdx, colIdx);
    }
    
  };

  firstSolution(0);
  return solutionCount;
};




