const nameInput = document.getElementById("name-input")
const saveBtn = document.getElementById("save-btn")

saveBtn.addEventListener("click", () => {
  const name = nameInput.value
  chrome.storage.sync.set({
    name,

  }, () => {
    console.log(`citaat van de dag is ${name}`)
  })
})

chrome.storage.sync.get(["name"], (res) => {
  nameInput.value = res.name ?? "hier moet jouw citaat zijn"
})