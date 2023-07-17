// Create a class called 'Matrix' containing a constructor that initializes the number of
// rows and the number of columns of a new Matrix object. The Matrix class has the
// following information:
// 1 - number of rows of the matrix
// 2 - number of columns of the matrix
// 3 - elements of the matrix in the form of a 2D array


class Matrix {
    constructor(rows, columns) {
      this.rows = rows;
      this.columns = columns;
      this.elements = this.createMatrix(rows, columns);
    }
  
    createMatrix(rows, columns) {
      const matrix = [];
      for (let i = 0; i < rows; i++) {
        matrix.push(new Array(columns).fill(0));
      }
      return matrix;
    }
  
    displayMatrix() {
      console.log("Matrix:");
      for (let i = 0; i < this.rows; i++) {
        console.log(this.elements[i].join("\t"));
      }
    }
  
    // getElement(row, column) {
    //   if (row >= 0 && row < this.rows && column >= 0 && column < this.columns) {
    //     return this.elements[row][column];
    //   } else {
    //     console.log("Invalid row or column index.");
    //     return null;
    //   }
    // }
  
    // setElement(row, column, value) {
    //   if (row >= 0 && row < this.rows && column >= 0 && column < this.columns) {
    //     this.elements[row][column] = value;
    //     console.log("Element set successfully.");
    //   } else {
    //     console.log("Invalid row or column index.");
    //   }
    // }
  }
  
  // Example usage:
  var matrix = new Matrix(3, 4);
  
  matrix.displayMatrix(); // Display initial matrix
  
//   matrix.setElement(1, 2, 5); // Set element at row 1, column 2 to 5
  
  matrix.displayMatrix(); // Display updated matrix
  
  console.log(matrix.getElement(1, 2)); // Get value at row 1, column 2
  