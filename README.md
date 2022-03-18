# isaks.io

[isaks.io](https://isaks.io) is my personal website.

## Project Status

Live @ [isaks.io](https://isaks.io) ✨

## Development

### Built with

- [React](https://reactjs.org/)
- [Gatsby](https://www.gatsbyjs.com/)
- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Firebase](https://firebase.google.com/)

### Installation

```bash
git clone https://github.com/isaksolheim/isaks.io.git
cd isaks.io
yarn install
```

### Running locally

```bash
gatsby develop
```

### Building

```bash
gatsby build
```

### Deploying

This project uses Firebase hosting. After configuring Firebase using the `firebase init` command, you can deploy using the following command:

```bash
firebase deploy
```

Note:
When running locally, the file `.env` must be created. It should containt Firebase credentials with the following structure:

```bash
GATSBY_FIREBASE_API_KEY=<YOUR_FIREBASE_API_KEY> GATSBY_FIREBASE_AUTH_DOMAIN=<YOUR_FIREBASE_AUTH_DOMAIN> GATSBY_FIREBASE_DATABASE_URL=<YOUR_FIREBASE_DATABASE_URL> GATSBY_FIREBASE_PROJECT_ID=<YOUR_FIREBASE_PROJECT_ID> GATSBY_FIREBASE_STORAGE_BUCKET=<YOUR_FIREBASE_STORAGE_BUCKET> GATSBY_FIREBASE_MESSAGING_SENDER_ID=<YOUR_FIREBASE_MESSAGING_SENDER_ID> GATSBY_FIREBASE_APP_ID=<YOUR_FIREBASE_APP_ID> GATSBY_FIREBASE_MEASUREMENT_ID=<YOUR_FIREBASE_ANALYTICS_TRACKING_ID>
};
```
