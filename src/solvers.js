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

window.searchBoard = function(row, board, n, cb, filter) {
    
  if (row === n) {
    return cb();
  }

  for (var i = 0; i < n; i++) {
    board.togglePiece(row, i);
    if (!board[filter]()) {
      solution = searchBoard(row + 1, board, n, cb, filter);
    }
    board.togglePiece(row, i);
  }      
  return solution;
};

window.findNRooksSolution = function(n) {
  var board = new Board({n: n});
  var solution = board.rows();
  var filter = 'hasAnyRooksConflicts';
  
  var cb = function() {
    solution = board.rows().map(function(row) {
      return row.slice();
    });
  };
  
 
  searchBoard(0, board, n, cb, filter);

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  var filter = 'hasAnyRooksConflicts';
  var cb = function() {
    solutionCount++;
  };
  searchBoard(0, board, n, cb, filter);
  
  
  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var board = new Board({n: n});
  var solution = board.rows();
  debugger;
  var filter = 'hasAnyQueensConflicts';
  
  var cb = function () {
    solution = board.rows().map(function(row) {
      return row.slice();
    });
    
  };
  
  searchBoard(0, board, n, cb, filter);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {  
  var solution = 0;

  var board = new Board({n: n});
  var filter = 'hasAnyQueensConflicts';
  
  var cb = function () {
    solution++; 
  };
  
  searchBoard(0, board, n, cb, filter);

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};
