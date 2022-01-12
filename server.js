const express = require("express");
const server = express();

// MODULES

const posts = require("./posts");

// home page
server.get("/", (request, response) => {

  let allPosts = "";


  for (const post of Object.values(posts)) {
    allPosts += `<li>

      <h2>${post.user}</h2>
      <p>${post.message}</p>

    </li>`
  }



  let html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./style.css"> 
      <title>Document</title>
  </head>
  <body>

  <h1>Tiny Thoughts!</h1>

  <form method="POST">

    <label for="user">User</label>
    <input name="user" type="text" id="user">

    <label for="message">Message</label>
    <textarea name="message" type="text" id="message"></textarea>

    <button aria-label="Click this button submit your post" type="submit">Post</button>

  </form>

  <ul>${allPosts}</ul>

  </body>
  </html>
`;

  response.send(html)


})


// ADDING A POST

const bodyParser = express.urlencoded({ extended: false });

server.post("/", bodyParser, (request, response) => {
  const newName = request.body.user;
  const newMessage = request.body.message;

  const newPost = {user: newName, message: newMessage};

  posts[newName] = newPost;
  response.redirect("/");
})









const PORT = 3333;

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));