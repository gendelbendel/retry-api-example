'use strict';

const { anyPass } = require('ramda');

/**
 * Retries running a promise that did not give expected results based on a list of predicates
 * @param  {Promise}    promiseThunk  the promise to retry
 * @param  {Object[]}   predicateList the partner Id to get
 * @param  {number}     maxTries      the maximum amount of retries, default 0
 * @param  {number}     attempts      the current attempt number set by recursion, default 1
 * @return {Promise}                  resolves to the promiseThunk promise resolution
 */
const retryPromise = (promiseThunk, predicateList = [], maxTries = 0, attempts = 1) => {
  console.log(`Trying promise, attempt #${attempts}`);

  // If any of the predicates in predicateList pass, we will stop retrying
  const shouldRetry = anyPass(predicateList);

  return promiseThunk().then(res => {
    console.log(`Promise response: ${JSON.stringify(res)}`);
    if (!shouldRetry(res) && attempts < maxTries) {
      return retryPromise(promiseThunk, predicateList, maxTries, ++attempts);
    }
    // TODO: Perhaps add handling around hitting the max amount of retries?
    //       This might not be the best place for it, though 
    return res;
  });
};

module.exports = retryPromise;
