const app = require("express")();

const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("What is socket:", socket);
  console.log("Socket is active to connect!");

  socket.on("chat", (payload) => {
    console.log("What is payload:", payload);
    io.emit("chat", payload);
  });
});

// app.listen(3000, () => console.log("Server running..."));
server.listen(5000, () => console.log("Server running on port 5000..."));
