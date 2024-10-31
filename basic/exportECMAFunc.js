import {oddSecond, evenSecond} from './exportECMAVar.js';

const checkOddorEven = (n) => {
  if (n % 2) {
    return oddSecond;
  }
  return evenSecond;
};

export default checkOddorEven;