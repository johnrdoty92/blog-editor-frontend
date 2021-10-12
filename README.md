# Blog Content Editor

This was built with **React** and **styled-components**. This app is the front end to a Node.js backend that uses MongoDB as the database. The application is live [**HERE**](http://johndoty.website)

## How to use

- Clone [this repository](https://github.com/johnrdoty92/blog-editor-frontend.git) and use the **_npm run build_** command to get a production version of the app.
- Clone the [backend respository](https://github.com/johnrdoty92/blog-editor-backend.git) and add the build folder as middleware like this:

> `import express from 'express';`
>
> `const server = express();`
>
> `server.use(express.static(path.join(__dirname, "..", "blog-editor", "build")));`
