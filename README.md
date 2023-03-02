

# NX Monorepo

This project was generated using [Nx](https://nx.dev) and has been written mostly in [Typesript](https://www.typescriptlang.org/docs/)

The apps have been developed using either [Nextjs](https://nextjs.org/) or [Sveltekit](https://kit.svelte.dev/docs/introduction), along with:
- [Styled-Components](https://styled-components.com/), 
- [Storybook](https://storybook.js.org/),
- [GraphQL](https://graphql.org/)
- [Hygraph](https://hygraph.com/)
- [React-Slick](https://react-slick.neostack.com/) and
- [Apollo Client](https://www.apollographql.com/docs/react/)

## Development server

Run `nx serve <app-name>` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Build

Run `nx build <app-name>` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test <app-name>` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Understand the workspace

Run `nx graph` to see a diagram of the dependencies of your projects.


## Installing Storybook

Use `npx sb init` to install Storybook

## Running Storybook

`cd` into the component-library

Use `yarn run storybook` to run storybook on [localhost:6006](http://localhost:6006)
