import { WhereFilter } from 'weaviate-ts-client'
import { ClassObj } from './interfaces/classObj'
import * as queries from './queries/data'

const express = require('express')
const app = express()

const { port } = process.env

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

const where_filter: WhereFilter = {
  path: ['entity'],
  operator: 'Equal',
  valueText: ''
}

async function execute() {
  try {
    // await queries.deleteClass('')
    // await queries.createClass(classObj)
    // console.log((await queries.getSchema()).classes[0])
    // await queries.importData(
    //   '',
    //   ''
    // )
    // console.log(await queries.getData())
    // console.log(
    //   await queries.textSearch(
    //     '',
    //     ['4'],
    //     [],
    //     { filters: [where_filter], limit: 3 }
    //   )
    // )
  } catch (err) {
    return
  }
}

execute()
