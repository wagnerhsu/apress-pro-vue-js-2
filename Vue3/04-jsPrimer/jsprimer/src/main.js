import { asyncAdd } from './maths';
import './string-demo';
import './array-demo';
import './object-demo';

let values = [10, 20, 30, 40, 50];

async function doTask() {
  let total = await asyncAdd(values);
  console.log(`Main Total: ${total}`);
}

doTask();
