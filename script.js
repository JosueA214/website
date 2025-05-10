const btn = document.getElementById("btn");
const title = document.getElementById("title");

function hello () {
    console.log("Hello");
    title.innerText = "Hello";
}
btn.addEventListener("click", hello);

const imput = document.getElementById("imput");

imput.addEventListener("input", (e) => {
    console.log(e.target.value);
    title.innerText = e.target.value;
});

const prompt = document.getElementById("prompt");
const generate = document.getElementById("generate");
const image = document.getElementById("image");

generate.addEventListener("click", () => {
    const imgSrc = "https://image.pollinations.ai/prompt/" + prompt.value;
    image.src = imgSrc;
});