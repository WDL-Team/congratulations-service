# Congratulations service

An our project, that provides service to make and receive custom congratulations.

### Technology stack
+ React
+ TypeScript
+ Vite
+ ESLint
+ Prettier

### Installation
| Command | Description |
| --- | --- |
| `apt install pnpm` | Install pnpm if it is not installed |
| `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh \| bash` | Install nvm |
| `nvm install v18.0.0` | Install node v18.0.0 |
| `nvm alias default v18.0.0` | Set node v18.0.0 as default |
| `git clone git@github.com:WDL-Team/congratulations-service.git congrat` | Clone project |
| `cd congrat` | Enter project folder |
| `pnpm install` | Install project dependencies |
| `pnpm run prepare` | Install husky hooks |

### Usage
| Command | Description |
| --- | --- |
| `yarn dev` | Run project in developer mode |
| `yarn build` | Build project |
| `yarn lint` | Start eslint |
| `yarn format` | Prettier auto format |
