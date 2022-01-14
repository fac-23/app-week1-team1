const express = require("express");
const server = express();

// MODULES

const posts = require("./posts");

const staticHandler = express.static("public");

server.use(staticHandler);

// home page
server.get("/", (request, response) => {
  let allPosts = "";

  for (const post of Object.values(posts)) {
    allPosts += `<li id =${post.user} class="post">

      <div class="post__content">
        <h2 class="post__user">${post.user}</h2>
        <p class="post__message">${post.message}</p>
      </div>

      <form action="/deletepost" method="POST" id="delete-post-form">

      <button name="name" value="${post.user}" id="delete-post-${post.user}" type="submit" aria-label="Click this button to delete this post">Delete</button>

      </form>

    </li>`;
  }

  let html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./style.css">
      <link rel="shortcut icon" type="image/jpg" href="favicon.ico"/>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&family=Ubuntu&display=swap" rel="stylesheet">
      <title>Tiny Thoughts!</title>
  </head>
  <body>

    <div class="app-wrapper center width-md">
<img src=https://freesvg.org/img/internet_cloud.png> 
      <h1>Tiny Thoughts!</h1>

      <form method="POST" id="submit-post-form" class="width-sm">

        <label for="user">User</label>
        <input name="user" type="text" id="user">

        <label for="message">Message</label>
        <textarea name="message" type="text" id="message" rows="5" cols="33"></textarea>

        <button aria-label="Click this button submit your post" type="submit">Post</button>

      </form>
    
      <ul class="stack-md">${allPosts}</ul>

    </div>

  </body>
  </html>
`;

  response.send(html);
});

// ADDING A POST

const bodyParser = express.urlencoded({ extended: false });

server.post("/", bodyParser, (request, response) => {
  const newName = request.body.user;
  const newMessage = request.body.message;

  const newPost = { user: newName, message: newMessage };

  posts[newName.toLowerCase()] = newPost;
  response.redirect("/");
  // console.log(posts);
  // console.log(request.body.user);
});

// DELETE POST

server.post("/deletepost", bodyParser, (request, response) => {
  const postToDelete = request.body.name.toLowerCase();
  console.log(request.body);

  delete posts[postToDelete];

  response.redirect("/");
});

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
