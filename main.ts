/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/


// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let alien_color = "green";
if (alien_color === "green") {
  console.log("The player has just earned 5 points by killing green alien.")
}
  
  // • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
else if (alien_color != "green"){
  console.log("The player has just earned 10 points by killing red alien")
}

// • Write one version of this program that runs the if block and another that runs the else block.
if(alien_color !== "green") {
  console.log("The player has just earned 5 points by killing green alien.")
}
else {
  console.log("The player has just earned 10 points by killing red alien.")
}

