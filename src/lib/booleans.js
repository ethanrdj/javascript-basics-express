const negate = a => {
  return !a;
};

const both = (a, b) => {
  if (a && b) {
    return true;
  }
  return false;
};

const either = (a, b) => {
  if (a || b) {
    return true;
  }
  return false;
};

const none = (a, b) => {
  if (a || b) {
    return false;
  }
  return true;
};

const one = (a, b) => {
  if (a !== b) {
    return true;
  }
  return false;
};

const truthiness = a => {
  if (a) {
    return true;
  }
  return false;
};

const isEqual = (a, b) => {
  if (a === b) {
    return true;
  }
  return false;
};

const isGreaterThan = (a, b) => {
  if (a > b) {
    return true;
  }
  return false;
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
    return true;
  }
  return false;
};

const isOdd = a => {
  if (a % 2 === 0) {
    return false;
  }
  return true;
};

const isEven = a => {
  if (a % 2 === 0) {
    return true;
  }
  return false;
};

const isSquare = a => {
  const sqr = Math.sqrt(a);
  if (sqr * sqr === a) {
    return true;
  }
  return false;
};

const startsWith = (char, string) => {
  if (string.startsWith(char)) {
    return true;
  }
  return false;
};

const containsVowels = string => {
  string = string.toLowerCase();
  let result = false;
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === 'a' ||
      string[i] === 'e' ||
      string[i] === 'i' ||
      string[i] === 'o' ||
      string[i] === 'u'
    ) {
      return (result = true);
    }
  }
  return result;
};
/* const containsVowels = string => {
let matchingInstances = string.match(/[aeiou]/gi);
if(matchingInstances) {
return true;
}
else{
return false;
}; */

const isLowerCase = string => {
  if (string === string.toLowerCase()) {
    return true;
  }
  return false;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
