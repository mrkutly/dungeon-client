const dev = {
  BACKEND_URL: 'https://dungeon-api-staging.herokuapp.com/api/v1/',
}

const prod = {
  BACKEND_URL: 'https://dungeon-api-prod.herokuapp.com/api/v1/',
}

const configs = process.env.NODE_ENV === 'development' ? dev : prod;

export default configs;