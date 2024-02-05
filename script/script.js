let seconds = document.getElementById("seconds")
let begain = 59;
let sayHello = document.getElementById("sayHello")
let counter = document.getElementsByTagName("h1")[0]
let btn = document.getElementById("btn")

sayHello.style.display = "none"

let count = setInterval(() => {
    seconds.innerHTML = begain--; 
    if(begain == -1) {
        clearInterval(count)
        counter.style.display = "none"
        sayHello.style.display = "block"
        sayHello.classList.add("display")
    }
}, 1000)

btn.addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/in/ziad-fawzy-2670012a2"
})