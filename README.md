# retry-api-example

A test repo created to demonstrate using promises to poll a REST API until you get an expected response. This is useful for waiting until jobs that get triggered via a different endpoint have completed.

The `retryPromise` function located in [lib/retry-promise.js](lib/retry-promise.js)` does not exlcusively need to be used for API polling, though!

## Setup ##

### Without Docker ###

1. Clone this repo
2. `npm install`
3. In one tab, run `npm run start:server`
4. In a second tab, run `npm run start:api`

### Using Docker ###

1. Clone this repo
2. `npm install`
3. `docker-compose build`
4. `docker-compose up -d`
5. `npm run start:api`

You'll observe that you stop polling the API after you get a `status: 'completed'` response, and retry up to 10 times.

## Example ##

[lib/api.js](lib/api.js) is where you see an use case for the `retryPromise` function.
