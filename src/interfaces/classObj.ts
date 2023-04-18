import { Property } from 'weaviate-ts-client'

export interface ClassObj {
  class: string
  description: string
  properties: Property[]
  vectorizer: string
}
