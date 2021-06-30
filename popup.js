const timeElement = document.getElementById("time")
const currentTime = new Date().toLocaleTimeString()
timeElement.textContent = `The time is: ${currentTime}`

chrome.action.setBadgeText({
  text: "TIJD", 
}, () => {
  console.log("Messenger bag brunch vice butcher irony VHS four dollar toast asymmetrical sustainable bitters kinfolk. Literally kombucha mustache deep v activated charcoal, yr blue bottle leggings pop-up bitters organic fam synth. ")
}
)