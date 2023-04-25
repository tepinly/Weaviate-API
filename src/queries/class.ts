import { client } from './client'
import { ClassObj } from '../interfaces/classObj'
import { Property } from 'weaviate-ts-client'

export async function create(classObj: ClassObj) {
  try {
    return await client.schema.classCreator().withClass(classObj).do()
  } catch (err) {
    console.log(err.message)
    throw err
  }
}

export async function getProperties(className: string) {
  try {
    return (await client.schema.getter().do()).classes.find(
      (classObj) => classObj.class === className
    ).properties
  } catch (err) {
    console.log(err.message)
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
    console.log(err.message)
    throw err
  }
}

export async function remove(className: string) {
  try {
    return await client.schema.classDeleter().withClassName(className).do()
  } catch (err) {
    console.log(err.message)
    throw err
  }
}
