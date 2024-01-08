export default function iterateThroughObject(reportWithIterator) {
  let result='';
  let index=0;
  const length = reportWithIterator.length;
  for (const item of reportWithIterator) {
    result += item;
    if (index+1 !== length) {
      result += ' | '
    }
    index++;
  }

  return result;
}
