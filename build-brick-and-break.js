// Global variable to keep track of the number of bricks
let brickCount = 0;

export function build(numBricks) {
  const addBrick = () => {
    if (brickCount < numBricks) {
      brickCount++;
      const brick = document.createElement('div');
      brick.id = `brick-${brickCount}`;
      brick.classList.add('brick');
      
      // Set foundation attribute for middle column bricks
      if (brickCount % 3 === 2) {
        brick.dataset.foundation = 'true';
      }
      
      document.body.appendChild(brick);
      setTimeout(addBrick, 100);
    }
  };
  
  addBrick();
}

export function repair(...ids) {
  ids.forEach(id => {
    const brick = document.getElementById(id);
    if (brick) {
      if (brick.dataset.foundation === 'true') {
        brick.dataset.repaired = 'in progress';
      } else {
        brick.dataset.repaired = 'true';
      }
    }
  });
}

export function destroy() {
  const bricks = document.querySelectorAll('.brick');
  if (bricks.length > 0) {
    const lastBrick = bricks[bricks.length - 1];
    lastBrick.remove();
    brickCount--;
  }
}