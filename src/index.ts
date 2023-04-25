import { Property, WhereFilter } from 'weaviate-ts-client'
import { ClassObj } from './interfaces/classObj'
import * as queriesData from './queries/data'
import * as queriesSchema from './queries/schema'

export async function createClass(classObj: ClassObj) {
  try {
    return await queriesSchema.createClass(classObj)
  } catch (err) {
    return
  }
}

export async function getSchema() {
  try {
    return await queriesSchema.get()
  } catch (err) {
    return
  }
}

export async function updateClass(className: string, property: Property) {
  try {
    return await queriesSchema.updateClass(className, property)
  } catch (err) {
    return
  }
}

export async function deleteClass(className: string) {
  try {
    return await queriesSchema.deleteClass(className)
  } catch (err) {
    return
  }
}

export async function importUrl(
  className: string,
  url: string,
  additionalOptions?: any[]
) {
  try {
    return await queriesData.importUrl(className, url, additionalOptions)
  } catch (err) {
    return
  }
}

export async function textSearch(args: {
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
    return await queriesData.textSearch(className, concepts, fields, {
      filters,
      limit,
      additionalFields
    })
  } catch (err) {
    return
  }
}
