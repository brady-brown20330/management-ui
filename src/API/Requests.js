const contentstack = require("contentstack")

const Stack = contentstack.Stack({
  api_key: process.env.REACT_APP_APIKEY,
  delivery_token: process.env.REACT_APP_DELIVERY_TOKEN,
  environment: process.env.REACT_APP_ENVIRONMENT,
  region: process.env.REACT_APP_REGION ? process.env.REACT_APP_REGION : "us",
})

// create an entry 

// publish an entry

// add an asset

// export all functions