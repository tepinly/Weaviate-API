import { client } from './client'
import { ClassObj } from '../interfaces/classObj'
import { Property } from 'weaviate-ts-client'

async function crud(
  req: string,
  args?: { classObj?: ClassObj; className?: string; property?: Property } | any
): Promise<any> {
  try {
    const schema = client.schema

    const res = await (req === 'create'
      ? schema.classCreator().withClass(args.classObj)
      : req === 'delete'
      ? schema.classDeleter().withClassName(args.className)
      : req === 'update'
      ? schema
          .propertyCreator()
          .withClassName(args.className)
          .withProperty(args.property)
      : schema.getter()
    ).do()
    return res
  } catch (err) {
    console.log(err.message)
    throw err
  }
}

export async function createClass(classObj: ClassObj) {
  return await crud('create', { classObj })
}

export async function get() {
  return await crud('read')
}

export async function updateClass(className: string, property: Property) {
  return await crud('update', { className, property })
}

export async function deleteClass(className: string) {
  return await crud('delete', { className })
}
