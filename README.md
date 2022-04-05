# duolingo-story-network

This is a visualization of the characters and their connections in the French Duolingo stories.

A node represent a character. The size of the node correlates with the number of stories the character plays a role in. An edge represent the connection between two characters. The width of the edge correlates with the number of stories that both characters play in.

## Link to the page

https://pyzon.github.io/duolingo-story-network/

## Build and run the project locally

Install dependencies.

```sh
npm install
```

Build for development.

```sh
npm run build-dev
```

Build for production.

```sh
npm run build-prod
```

Running.

```sh
node dist/bundle.js
```