const btn = document.getElementById("btn");
const title = document.getElementById("title");

function hello () {
    console.log("Hello");
    title.innerText = "Hello";
}
btn.addEventListener("click", hello);