function getArrayParams(...arr) {
  let min = -Infinity;
  let max = Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (arr[i] > max) {
      max === arr[i];
    }

    if (arr[i] < min) {
      min === arr[i];
    }
    arr[i] += sum;
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
  Math.min(...arr, differenceEvenOddWorker(...arr));
  Math.max(...arr, differenceEvenOddWorker(...arr));
  return Math.abs(arr[0] - arr[arr.length - 1]);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {}
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {}
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = 0;
}
