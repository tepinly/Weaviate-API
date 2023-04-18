import { WhereFilter } from 'weaviate-ts-client'
import { client } from './client'

async function getJsonData(url: string, auth: string = ''): Promise<any> {
  const file: Response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: auth
    }
  })
  return await file.json()
}

export async function read() {
  try {
    return await client.data.getter().do()
  } catch (err) {
    console.log(err.message)
    throw err
  }
}

export async function textSearch(
  className: string,
  concepts: string[],
  fields: string[],
  args?: {
    filters?: WhereFilter[]
    limit?: number
    additionalFields?: string[]
  }
) {
  const { filters, limit, additionalFields } = args

  try {
    const graphql = client.graphql
      .get()
      .withClassName(className)
      .withNearText({ concepts })
      .withLimit(limit ?? 2)
      .withFields(
        `${fields.join(' ')} _additional { ${
          additionalFields ? additionalFields.join(' ') : 'id certainty'
        } }`
      )

    if (filters) {
      for (const filter of filters) graphql.withWhere(filter)
    }

    const res = await graphql.do()
    return JSON.stringify(res, null, 2)
  } catch (err) {
    console.log(err)
    throw err
  }
}

export async function importUrl(
  className: string,
  url: string,
  additionalOptions?: any[]
) {
  const data = (await getJsonData(url)).data

  let batcher = client.batch.objectsBatcher()
  let counter: number = 0
  let batchSize: number = 100

  try {
    data.forEach(async (row: { [key: string]: unknown }) => {
      const obj = {
        class: className,
        properties: {
          ...row,
          ...additionalOptions
        }
      }

      batcher = batcher.withObject(obj)

      if (counter++ == batchSize) {
        const res = await batcher.do()
        console.log(res)

        counter = 0
        batcher = client.batch.objectsBatcher()
      }
    })

    const res = await batcher.do()
    console.log(res[0].result.errors)
  } catch (err) {
    console.log(err.message)
    throw err
  }
}
