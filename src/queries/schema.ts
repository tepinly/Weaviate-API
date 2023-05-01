import { client } from '../client.js'

export async function get() {
  try {
    return await client.schema.getter().do()
  } catch (err) {
    throw err
  }
}
