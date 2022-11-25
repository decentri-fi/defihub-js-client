Decentrifi Defi Hub Javascript Client
===

The Decentrifi Defi Hub javascript client provides users with an easy to integrate library.
It's written in Typescript and implements the API located at https://docs.decentri.fi/api-endpoints.

# Dependency

Installing the library can be done using the following command:

```bash
npm i @decentri.fi/defi-hub
```

# Integration

```javascript
import defihub from "@decentri.fi/defi-hub";


const lendingMarkets = await defihub.lending().markets("aave")
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