let isX = true;

const squares = document.querySelectorAll('.square');
squares.forEach(square => {
  square.addEventListener('click', function(e) {
    const sign = isX ? 'X' : 'O';

    // Check if a square doesn't already contain a sign
    if (!e.target.textContent) {
      e.target.textContent = sign;
      isX = !isX;
    }

    isWinner();
  });
});

function isWinner() {
  const winningSchemes = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [4, 5, 6],
    [6, 7, 8]
  ];

  winningSchemes.forEach(scheme => {
    const squareSigns = [];

    scheme.forEach((el, index) => {
      squareSigns[index] = squares[el].textContent;
    });

    const signStr = squareSigns.join('');

    if (signStr === 'XXX') {
      return console.log('X is the winner');
    } else if (signStr === 'OOO') {
      return console.log('O is the winner');
    }
  });
}