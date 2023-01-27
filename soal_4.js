function diagonalhasil() {

    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {

        primaryDiagonal += matrix[i][i];

        secondaryDiagonal += matrix[i][matrix.length - 1 - i];

    }

    return Math.abs(primaryDiagonal - secondaryDiagonal);
}

let matrix =[ [50, 2, 10],
              [4, 10, 6],
              [0, 28, 0]  ];

console.log(diagonalhasil(matrix)); 



