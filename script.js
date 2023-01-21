const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Esse dia já está cadastrado")
    return
  }

  alert("Dia adicionado")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("nlwSetup@habits", JSON.stringify(nlwSetup.data))
}

// const data = {
//   run: ["01-01", "01-02", "01-06", "01-07", "01-08"],
//   food: ["01-03", "01-04"],
//   work: ["01-02"],
// }

const data = JSON.parse(localStorage.getItem("nlwSetup@habits"))

nlwSetup.setData(data)
nlwSetup.load()
