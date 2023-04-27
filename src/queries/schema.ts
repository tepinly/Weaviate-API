import { client } from '../client'

export async function get() {
  try {
    return await client.schema.getter().do()
  } catch (err) {
    console.log(err.message)
    throw err
  }
}