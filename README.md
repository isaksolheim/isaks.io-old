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
Before deploying, the file `src/utils/firebase-cred.ts` must be created. It should containt Firebase credentials with the following structure:

```javascript
export const FirebaseConfig = {
  apiKey: 'API_KEY',
  authDomain: 'AUTH_DOMAIN',
  databaseURL: 'DATABASE_URL',
  projectId: 'PROJECT_ID',
  storageBucket: 'STORAGE_BUCKET',
  messagingSenderId: 'MESSAGING_SENDER_ID',
  appId: 'APP_ID',
  measurementId: 'MEASUREMENT_ID',
};
```
