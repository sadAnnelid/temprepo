const http = require('http')
const l = require('lodash')
const items = [1, [4,5], 77, [4343, 656, 34, [34,34]]]
const op = l.flattenDeep(items)
console.log(op)