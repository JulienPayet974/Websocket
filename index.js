const express = require('express');
const http = require('http')
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('./public'))

app.get("/", (req,res)=>{
  res.send('coucou')
});

io.on('connection',(socket)=>{
  console.log("un utilisateur s'est connecté");
  socket.emit("lqjsdygqjklsdfg", "Salut, tu es bien connecté")
  socket.on("piuyqjtf",(msg)=>{
    console.log(msg)
  })
  socket.on("clientMsg",(msg)=>{
    io.emit("srvMsg",msg)
  })
})

server.listen(3000, ()=>{
  console.log("server ready on http://localhost:3000")
});