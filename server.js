const express = require("express");

const server = express();

// home page
server.get("/", (request, response) => {
  response.send(`
  <h1>Welcome to my site</h1>
  <nav>
    <a href="about">About</a>
    <a href="sign-up">Sign up</a>
  </nav>
  `)
})

// about page
server.get("/about", (request, response) => {
  response.send("<h1>About this site</h1>")
})

// sign-up page
server.get("/sign-up", (request, response) => {
  response.send(`
  <h1>Sign up</h1>
  <form method="POST">
    <label for="email">Email</label>
    <input name="email" type="email" id="email">
    <label for="password">Password</label>
    <input name="password" type="password" id="password">
    <button type="submit">Sign up!</button>
  </form>
  `)
})


// redirect from sign-up page to welcome page
server.post("/sign-up", (request, response) => {
  response.redirect("/welcome");
});



// welcome page
server.get("/welcome", (request, response) => {
  response.send("<h1>Thanks for joining my friend!</h1>")
})



const PORT = 3333;

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));