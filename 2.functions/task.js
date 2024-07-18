function getArrayParams(...arr) {
  let min = -min;
  let max = max;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    } 
  }

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  
  
  
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  } 


function differenceMaxMinWorker(...arr) {
  
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sumEvenElement += arr[i];
    } else sumOddElement += arr[i];
     
  }
  }


function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
}

function makeWork (arrOfArr, func) {
  
}
