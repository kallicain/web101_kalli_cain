const buttonElement = document.querySelector('button')
const emailInput = document.querySelector('#email')
const textbox = document.querySelector('.textbox')
const school= document.querySelector('#school')
const work= document.querySelector('#work')
const resume= document.querySelector('#resume')
const yes= document.querySelector('#yes')
const no= document.querySelector('#no')
const date= document.querySelector('#date')
const resultsSection = document.getElementById('results')

console.log(resultsSection);
console.log(buttonElement);

const submitForm = () => {
  console.log('Form Submitted')
  alert('Form Submitted')
  
}

const placeForResults = document.getElementById("results")

new URLSearchParams(window.location.search).forEach((value, name) => {
  placeForResults.append(`${name} : ${value}`)
  placeForResults.append(document.createElement("br"))
})
