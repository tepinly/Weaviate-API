import { Property } from 'weaviate-ts-client'
import { client } from '../client.js'
import { ClassObj } from '../interfaces/classObj.js'

export async function create(classObj: ClassObj) {
  try {
    return await client.schema.classCreator().withClass(classObj).do()
  } catch (err) {
    throw err
  }
}

export async function get(className: string) {
  try {
    return (await client.schema.getter().do()).classes.find(
      (classObj) => classObj.class === className
    )
  } catch (err) {
    throw err
  }
}

export async function update(className: string, property: Property) {
  try {
    return await client.schema
      .propertyCreator()
      .withClassName(className)
      .withProperty(property)
      .do()
  } catch (err) {
    throw err
  }
}

export async function remove(className: string) {
  try {
    return await client.schema.classDeleter().withClassName(className).do()
  } catch (err) {
    throw err
  }
}
