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
  let generateSoln = function (pieceCount, row = 0, col = 0) {

    if (pieceCount === 0) {
      return board.rows();
    }  

    for (row; row < n; row++) {

      for (col; col < n; col++) {
        board.togglePiece(row, col);
        if (!board.hasAnyRooksConflicts()) {
          return generateSoln(pieceCount - 1,row , col + 1);
        } else {
          board.togglePiece(row, col);
        }
      }

      col = 0;
    }
  }
  return generateSoln(n);
};

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return solution;

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  let original = new Board({n});
  let solutions = 0;

  let generateSoln = function (board, pieceCount, row = 0, col = 0) {

    if (pieceCount === 0) {
      solutions++;
      
    }  

    for (row; row < n; row++) {

      for (col; col < n; col++) {
        board.togglePiece(row, col);
        if (!board.hasAnyRooksConflicts()) {
          generateSoln(new Board(board.rows()), pieceCount - 1,row + 1, col + 1);
          board.togglePiece(row, col);
          generateSoln(new Board(board.rows()), pieceCount,row, col + 1);
        } else {
          board.togglePiece(row, col);
        }
      }

      col = 0;
    }
  }
  generateSoln(original, n);
  return solutions;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

// window.filterSolutions = function(arr) {
//   let output = [];
//   for (let subArr of arr) {
//     if (output.includes(JSON.stringify(subArr))) {
//       output.push(JSON.stringify(subArr));
//     }
//   }

//   return output.map(x => {
//     return JSON.parse(x);
//   });
// }

// window.countNRooksSolutions = function(n) {
//   let original = new Board({n});
//   let solutions = [];

//   let generateSoln = function (board, pieceCount, row = 0, col = 0) {

//     if (pieceCount === 0) {
//       solutions.push(board.rows());
      
//     }  

//     for (row; row < n; row++) {

//       for (col; col < n; col++) {
//         board.togglePiece(row, col);
//         if (!board.hasAnyRooksConflicts()) {
//           generateSoln(new Board(board.rows()), pieceCount - 1,row , col + 1);
//           board.togglePiece(row, col);
//           generateSoln(new Board(board.rows()), pieceCount,row , col + 1);
//         } else {
//           board.togglePiece(row, col);
//         }
//       }

//       col = 0;
//     }
//   }
//   generateSoln(original, n);
//   console.log(solutions);
//   return solutions.length;
// };


