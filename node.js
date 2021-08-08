let fs = require("fs")
let path = require("path")
let svg = "icon.svg"
let abs = path.resolve(svg)
let utf = "utf8"

function txt(fun) {
  return fun ? fs.readFile(abs, utf, (err, dat) => {
    if (err) throw err
    fun(dat)
  }) : fs.readFileSync(abs, utf)
}

module.exports = txt
