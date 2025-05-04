let numHund = 0;
if (changeDue > 100 && changeDue > 100 && changeDue - 100 > 0){
    while (numHund < cid[8][1]/100 && changeDue > 0) {
        ++numHund;
        changeDue -= 100;
    } 
}

let numTwenties = 0;
if (changeDue > 0 && changeDue > 20 && changeDue - 20 > 0){
while (numTwenties < cid[7][1]/20 && changeDue > 0) {
      ++numTwenties;
      changeDue -= 20;
} 
}

let numTen = 0;
if (changeDue > 0 && changeDue > 10 && changeDue - 10 > 0){
    while (numTen < cid[6][1]/10 && changeDue > 0) {
        ++numTen;
        changeDue -= 10;
} 
}

let numFive = 0;
if (changeDue > 0 && changeDue > 5 && changeDue - 5 > 0){
    while (numFive < cid[5][1]/5 && changeDue > 0) {
        ++numFive;
        changeDue -= 5;
} 
}

let numOne = 0;
if (changeDue > 0 && changeDue > 1 && changeDue - 1 > 0){
    while (numOne < cid[4][1]/1 && changeDue > 0) {
        ++numOne;
        changeDue -= 1;
}  
}

let numQuart = 0;
if (changeDue > 0 && changeDue > .25 && changeDue - .25 > 0){
  while (numQuart < cid[3][1]/.25 && changeDue > 0) {
      ++numQuart;
      changeDue -= .25;
} 
}
    
let numDime = 0;
if (changeDue > 0 && changeDue > .1 && changeDue - .1 > 0){
    while (numDime < cid[2][1]/.1 && changeDue > 0) {
        ++numDime;
        changeDue -= .1;
}
}

let numNick = 0;
if (changeDue > 0 && changeDue > .05 && changeDue - .05 > 0){
    while (numNick < cid[1][1]/.05 && changeDue > 0) {
        ++numNick;
        changeDue -= .05;
} 
}

let numPenny = 0;
if (changeDue > 0 && changeDue > .01 && changeDue - .01 > 0){
    while (numPenny < cid[0][1]/.01 && changeDue > 0) {
        ++numPenny;
        changeDue -= .01;
}    
}

    