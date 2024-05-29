# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Build With

- Vite
- React
- TypeScript
- ShadcnUI
- React query
- TanStack table
- React hook form
- Tailwind CSS
- axios

## Setup

1. Use 20 version of node.js: <br>

```sh
$ nvm use 20
```

2. Clone the repository to your local machine, open terminal (GitBash for Windows users) and clone repo with command bellow:

```sh
git clone https://github.com/YaroslavYarynych/rick-and-morty-project.git
```

3. Open editor, set up project and install necessary packages in the code-editor you use:

```sh
$ npm install
```

4. Open the project in browser:

```sh
$ npm run dev
```

4. Bulid project:

```sh
$ npm run build
```

## Author

- GitHub - [YaroslavYarynych](https://github.com/YaroslavYarynych)
- Telegram - [Slavik_Yarynych](https://t.me/Slavik_Yarynych)
- LinkedIn - [Yaroslav Yarynych](https://www.linkedin.com/in/yaroslav-yarynych-87856722a/)


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
