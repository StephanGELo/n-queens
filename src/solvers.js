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
  console.log('n = ', n);
  var solution = []; 
  var board = new Board({'n': n});
  console.log(board);
  var attempts = 0;
  var piecesAdded = 0;
  debugger;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      board.togglePiece(i, j);
      piecesAdded++;
      
      var rowConflicts = board.hasRowConflictAt(i);
      var columnConflicts = board.hasColConflictAt(j);
      if (columnConflicts || rowConflicts) {
        board.togglePiece(i, j);
        piecesAdded--;
        if (piecesAdded === n) {
          break;
        }
        // test to see if piecesAdded = n
        // go through i-loop and tell attempt = n^2 times
        // offsetting the i-loop by attemps
        // loop back into board when placing the first attempt at row 3:col 1
        // recursion to loop through everything
      }
    }
    
    if (piecesAdded === n) {
      break;
    }
  }
  solution = board.rows();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  
  //console.log(board.rows());
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
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
