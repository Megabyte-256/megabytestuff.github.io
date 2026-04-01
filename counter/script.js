const text = document.getElementById("text")
const increase = document.getElementById("increase")
const reset = document.getElementById("reset")
const decrease = document.getElementById("decrease")
const custom = document.getElementById("custom")
let count = 0

increase.onclick = function add(){
  count ++
  text.textContent = count
}

reset.onclick = function restart(){
  count = 0
  text.textContent = count
}

decrease.onclick = function add(){
  count --
  text.textContent = count
}

custom.onclick = function add(){
  count = prompt("Enter a custom number")
  text.textContent = count
}