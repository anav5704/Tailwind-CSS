document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("nav").classList.toggle("hidden")
})


document.getElementById("mode").addEventListener("click", () => {
    console.log("toggle")
    document.getElementById("light").classList.toggle("hidden");
    document.getElementById("dark").classList.toggle("hidden");
    document.documentElement.classList.toggle("dark");
})