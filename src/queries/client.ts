import weaviate, { WeaviateClient } from 'weaviate-ts-client'
require('dotenv').config()
const { WEAVIATE_CLUSTER, API_KEY } = process.env

export const client: WeaviateClient = weaviate.client({
  scheme: 'https',
  host: `${WEAVIATE_CLUSTER}.weaviate.network`,
  headers: { 'X-Cohere-Api-Key': API_KEY || '' }
})
