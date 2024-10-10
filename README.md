# Good Morning Oswald
A very short Ludum Dare 56 jam game.

https://ldjam.com/events/ludum-dare/56/good-morning-oswald

https://hubol.itch.io/good-morning-oswald

## Using the source code

### Prerequisites

- [**Node.js**](https://nodejs.org/en/download) (version 18 or above) to build and serve the project
- **npm** (included with Node.js) to download the open source dependencies
- [**Git LFS**](https://git-lfs.com/) to retrieve audio and image assets from the repository

### Getting started

```npm ci```

Installs the dependencies of the project *exactly* as specified in `package-lock.json`

```npm run tool -- dev-patch-pixi-displayobject-ctor```

Patches some PixiJS code so that stack traces can be collected during development

### Developing

```npx smooch```

Starts `@hubol/smooch`, the tool responsible for monitoring binary assets and turning them into source code

```npm run serve```

Starts the project in development mode