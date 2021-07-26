//ryanve.dev/varam inspo
!function(web) {
  function answer(search) {
    if (!search) return
    var url = new URLSearchParams(search)
    var oil = url.get("oil")
    var ink = url.get("ink")
    var turn = url.get("turn")
    turn && check(turn)
    oil && change("--oil", oil)
    ink && change("--ink", ink)
  }

  function check(value) {
    value = value === true || value === "true"
    var box = document.getElementById("turn")
    box.checked === value || (box.checked = value)
  }

  function change(p, v) {
    var elder = document.documentElement
    var style = elder.style
    style.getPropertyValue(p) === v ||
    style.setProperty(p, v)
  }

  var ask = "URLSearchParams" in web
  ask && answer(location.search)

  web.ill = {
    answer: answer,
    change: change,
    turn: check
  }
}(window)
