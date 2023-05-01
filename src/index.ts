import { Property, WhereFilter } from 'weaviate-ts-client'
import { ClassObj } from './interfaces/classObj.js'
import * as queriesData from './queries/data.js'
import * as queriesClass from './queries/class.js'
import * as queriesSchema from './queries/schema.js'

export async function getSchema() {
  try {
    return await queriesSchema.get()
  } catch (err) {
    throw err
  }
}

export async function createClass(classObj: ClassObj) {
  try {
    return await queriesClass.create(classObj)
  } catch (err) {
    throw err
  }
}

export async function getClass(className: string) {
  try {
    return await queriesClass.get(className)
  } catch (err) {
    throw err
  }
}

export async function updateClass(className: string, property: Property) {
  try {
    return await queriesClass.update(className, property)
  } catch (err) {
    throw err
  }
}

export async function deleteClass(className: string) {
  try {
    return await queriesClass.remove(className)
  } catch (err) {
    throw err
  }
}

export async function importData(
  className: string,
  url: string,
  additionalOptions?: any[]
) {
  try {
    return await queriesData.importData(className, url, additionalOptions)
  } catch (err) {
    throw err
  }
}

export async function search(args: {
  className: string
  concepts: string[]
  fields: string[]
  filters?: WhereFilter[]
  limit?: number
  additionalFields?: string[]
}) {
  try {
    const { className, concepts, fields, filters, limit, additionalFields } =
      args
    console.log(
      await queriesData.search(className, concepts, fields, {
        filters,
        limit,
        additionalFields
      })
    )
  } catch (err) {
    throw err
  }
}
