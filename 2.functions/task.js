function getArrayParams(...arr) {
  let min = -Infinity;
  let max = Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
     sum += arr[i];
  }

  if (arr[i] > max) {
    max = arr[i];
  }

  if (arr[i] < min) {
    min = arr[i];
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
    if (arr [i] % 2 === 0) sumEvenElement += arr [i]; {
      sumOddElement += arr [i];
    } 
    if (arr [i] % 2 === 1) sumOddElement += arr [i]; {
      sumEvenElement += arr [i];
    }
  } 
  }


function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr [i] % 2 === 0) sumEvenElement += arr [i]; {
      countEvenElement++;
    }
    if (arr [i] % 2 === 1) sumEvenElement += arr [i]; {
      countEvenElement++;
    }
  }
}

function makeWork (arrOfArr, func) {

}
