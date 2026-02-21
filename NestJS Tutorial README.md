<!-- This read me file contains all the information I used and learnt while building this project -->

# NestJS tutorial

What is NestJS?  
> NestJS is a progressive Node.js framework built with TypeScript for scalable server-side apps.

### Installation
* npx @nestjs/cli new devmatch --package-manager npm --skip-git --directory .

> installs the cli, names the project **devmatch**, assigns the package manager as **npm** skips the git setup and the directory is the current location shown by the (dot)

* npm install
> Installs dependencies for this project, basically all packages needed for this project
>
> *`npm install`* is only required if you deleted node_modules, pulled new changes from Git, or cloned the project without dependencies.


* npm run start:dev
> *`npm run start:dev`* starts NestJS in development mode using ts-node with watch mode, meaning it automatically recompiles and restarts the server when you change files.

* npm run start:prod
> *`npm run start:prod`* runs the compiled JavaScript from the dist/ folder, optimized for performance and without file watching. Production-ready, faster, and uses prebuilt files.

