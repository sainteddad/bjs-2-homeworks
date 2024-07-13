function getArrayParams(...arr) {
  let min = -infinity;
  let max = infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    } 
  }
  
  getArrayParams(-59, 59, 20)
  getArrayParams(1, 2, 3, -60, 20)
  getArrayParams(5)

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
  
  }


function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
