const socket = io();
const form = document.querySelector("form")
const inputField = document.querySelector("#input-msg")
const messages = document.querySelector("#messages")


socket.on("lqjsdygqjklsdfg",(msg)=>{
  console.log(msg)
})

socket.on("srvMsg",(msg)=>{
  const myMsg = document.createElement("div");
  myMsg.innerHTML = msg;
  messages.appendChild(myMsg);
})

window.addEventListener("click", ()=>{
  socket.emit("piuyqjtf","j'ai cliqué dans la fenêtre")
})


form.addEventListener("submit", (event)=>{
  event.preventDefault();
  socket.emit("clientMsg", inputField.value);
  inputField.value = ""
})
