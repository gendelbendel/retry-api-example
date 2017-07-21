'use strict';

const { anyPass } = require('ramda');

const retryPromise = (promiseThunk, predicateList = [], maxTries = 0, attempts = 1) => {
  console.log(`Trying promise, attempt #${attempts}`);
  const shouldRetry = anyPass(predicateList);
  return promiseThunk().then(res => {
    console.log(res);
    if (!shouldRetry(res) && attempts < maxTries) {
      return retryPromise(promiseThunk, predicateList, maxTries, ++attempts);
    }
    return res;
  });
};


module.exports = retryPromise;
