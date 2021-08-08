let assert = require("assert")
let iode = require(".")

assert.ok(typeof iode == "function")
assert.ok(typeof iode() == "string")

iode(svg => {
  assert.ok(typeof svg == "string")
  console.log(svg)
})
