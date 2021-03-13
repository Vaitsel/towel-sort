
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if (arguments.length) {
    let arr = [];
    for (let i=0; i<=matrix.length-1; i++) {
      if (i % 2 === 0 || i === 0 ) {
        for (let j=0; j<=matrix[i].length-1; j++) {
          arr.push(matrix[i][j]);
        }
      } else {
        for (let j=matrix[i].length-1; j>=0; j--) {
          arr.push(matrix[i][j]);
        }
      }
    }
    return arr;
  } else {
    return [];
  }
}
