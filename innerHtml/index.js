// Use .innerHTML to render a Buy! button inside the div container


const container = document.getElementById("container")
 

container.innerHTML = "<button> Buy!</button>"


// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

function buy(){
    container.innerHTML += "<p> Thank you for buying!</p>"
}
