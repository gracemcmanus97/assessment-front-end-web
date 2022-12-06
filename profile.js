// let buttonClick = document.getElementById('color')
// buttonClick.addEventListener('click', function(event){
//     alert("My favorite color is Pastel Pink!")
// })

// let buttonClick2 = document.getElementById('place')
// buttonClick2.addEventListener('click', function(event){
//     alert("My favorite place is Leadville, Colorado!")
// })

// let buttonClick3 = document.getElementById('ritual')
// buttonClick3.addEventListener('click', function(event){
//     alert("My favorite ritual is getting up early in the morning, taking my dogs for a walk, and listening to music!")
// })

let color = document.getElementById(`color`)
let place = document.getElementById(`place`)
let ritual = document.getElementById(`ritual`)

function favColor() {
    alert("My favorite color is Pastel Pink!")
    console.log('Favorite color button clicked')
}
color.addEventListener('click', favColor)

function favPlace() {
    alert("My favorite place is at home with my dogs and partner!")
    console.log('Favorite place button clicked')
}
place.addEventListener('click', favPlace)

function favRitual() {
    alert("My favorite ritual is getting up early in the morning to walk my dogs and listen to music!")
    console.log('Favorite place button clicked')
}
ritual.addEventListener('click', favRitual)