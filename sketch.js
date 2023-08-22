let numFish = 100;
let fishArray = [];
let endFrame = false;
function setup() {
      createCanvas(500, 500);
      noStroke();

      // Create the fish objects
      for (let i = 0; i < numFish; i++) {
        let x = random(width);
        let y = random(height);
        fishArray.push({ x: x, y: y, speedX: random(-3, 0), speedY: random(-1, 1) });      }
        
      // Call removeFish function every half second
      setInterval(removeFish, 50);
      
}

function drawFish(x, y) {
      fill(255);
      ellipse(x, y, 20, 10); // Body of the fish
      triangle(x + 15, y - 7, x, y, x + 15, y + 7); // Back fin
}

function updateFishPosition() {
      for (let i = 0; i < fishArray.length; i++) {
        fishArray[i].x += fishArray[i].speedX;
        fishArray[i].y += fishArray[i].speedY;

        // Wrap fish around the canvas edges
        if (fishArray[i].x > width) fishArray[i].x = 0;
        if (fishArray[i].x < 0) fishArray[i].x = width;
        if (fishArray[i].y > height) fishArray[i].y = 100;
        if (fishArray[i].y < 0 + 100) fishArray[i].y = height;
      }
    }
    
    

function draw() {
      updateFishPosition(); // Update fish positions
      background(0);
      rect(0, 0, 500, 100)
      // Draw all the fish
      for (let i = 0; i < fishArray.length; i++) {
            drawFish(fishArray[i].x, fishArray[i].y);
      }
      
}

function removeFish() {
      // Check if there are fish in the array before removing
      if (fishArray.length > 24) {
        // Remove the last fish in the array
        fishArray.pop();
      }
    }

/* Flash and remove some fish
      if (frameCount == 120) {
            // Flash the screen
            setTimeout(() => {
            // Remove some fish (36 fish left)
            fishArray.splice(0, numFish - 36);
            background(255);
            }, 200);
      }
}
*/

// Degrade fish over time

