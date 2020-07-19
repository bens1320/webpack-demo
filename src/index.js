import x from "./x"
import jpg  from "./assets/1.jpg"

const div = document.getElementById("app")
console.log(x)

div.innerHTML = `
    <img src="${jpg}">
`

const button = document.createElement("button")
button.innerText = "懒加载"
button.onclick = () => {
    const promise = import("./lazy")
    promise.then((model)=>{
        const fn = model.default
        fn()
    }, ()=>{})
}

div.appendChild(button)