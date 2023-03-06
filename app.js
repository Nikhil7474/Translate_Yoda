const textInput = document.querySelector("#text")
const translateBtn = document.querySelector(".translate-btn")
const output = document.querySelector("#output")


const baseUrl = "https://api.funtranslations.com/translate/yoda.json"

function getTranslationUrl(txt) {
    return baseUrl + "?" + "text=" + txt
}

function errorHandler(error){
    console.log("error: " , error)
}

const languageTranslate = () => {
    const userValue = textInput.value
    fetch(getTranslationUrl(userValue))
        .then(response => response.json())
        .then(json => {
            const result = json.contents.translated
            output.innerText = result
            textInput.value= ""
        })
        .catch(errorHandler)
}

translateBtn.addEventListener("click", languageTranslate)