const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-bt").slice(0, -5);
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso 🔴")
    return
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data)) //1° arg remete a chave "habits", 2° transforma todos os dados do form em JSON
}


const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} //JSON -> OBJETO

nlwSetup.setData(data)
nlwSetup.load()