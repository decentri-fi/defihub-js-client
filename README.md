Defitrack Javascript Client
===

The Defitrack javascript client provides users with an easy to integrate library.
It's written in Typescript and implements the API located at https://docs.defitrack.io/api-endpoints.

# Dependency

Installing the library can be done using the following command:

```bash
npm i @defitrack/js-client
```

# Integration

```javascript
import defitrack from "@defitrack/js-client";


const lendingMarkets = await defitrack.lending().markets("aave")
```

# Contributing

## Building the repository

```bash
npm i 
npm run build
```

## Running tests

```bash
npm run test
```