const express = require("express")
const ws = require("ws")
const app = express()
const fs = require("fs")

const wsServer = new ws.Server({ noServer: true })
wsServer.on("connection", socket => {
  const response = fs.readFileSync("./response.json", { encoding: "utf-8" })
  socket.send(response)

  fs.watchFile("./response.json", (curr, prev) => {
    const response = fs.readFileSync("./response.json", { encoding: "utf-8" })
    socket.send(response)
  })
})

const server = app.listen(4000)
server.on("upgrade", (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, socket => {
    wsServer.emit("connection", socket, request)
  })
})
