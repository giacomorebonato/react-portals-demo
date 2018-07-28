# React portals example

This example is a follow up to [this presentation](https://docs.google.com/presentation/d/15XQ1tcoJhtWTRE5H1B6l-i5NxkJJW_RbfIcKGrSfOnU/edit).

## Instructions

```bash
npm i     # install dependencies
npm start # start project
```

# Explanation

`index.html` - is the main page that contains an iframe.  
`iframe.html` - is the iframe content that runs app.js script.  
`app.js` - renders a a React app with a form.  

The task list is rendered from app.js to the parent document (Portals!!).

# What to do?

It's up to you!
The iframe can stay hidden, listen to socket messages and just render
those to the parent document.
