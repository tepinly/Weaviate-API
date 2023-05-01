import weaviate, { WeaviateClient } from 'weaviate-ts-client'
import dotenv from 'dotenv'
dotenv.config()
const { WEAVIATE_CLUSTER, WEAVIATE_VECTORIZER, WEAVIATE_VECTORIZER_KEY } =
  process.env

export const client: WeaviateClient = weaviate.client({
  scheme: 'https',
  host: `${WEAVIATE_CLUSTER}.weaviate.network`,
  headers: {
    [`X-${WEAVIATE_VECTORIZER}-Api-Key`]: WEAVIATE_VECTORIZER_KEY || ''
  }
})
