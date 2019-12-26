const dataURL = "https://api.myjson.com/bins/jcmhn"
const fields = [
	"var1",
	"var2",
	"var3",
	"var4",
	"var5",
	"var6",
	"speach"
]

function handleForm() {
	let obj = {}

	fields.forEach(function(field) {
		obj[field] = $("input[name="+ field +"]")[0].value
	})

	return obj
}

function handleButton() {
  // взять данные по dataUrl, вытащить их и передать в handleData
  $.getJSON(dataURL, handleData)
}

function handleData(data) {
	let message = "<br>"	
	let formVals = handleForm()

	data["text"].forEach(function(row) {
		for(key in formVals) {
			row = row.replace("{" + key + "}", formVals[key])
		}
		message = message + row + "<br><br>"
	})

	$("div#result").html(message)

}

function init() {
	$("#button-fetch").click(handleButton)
}

$(document).ready(init)
