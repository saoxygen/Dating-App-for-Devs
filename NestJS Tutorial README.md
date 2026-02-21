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

### Modules and Decorators

#### Decorators Definition
> A **decorator** in TypeScript/NestJS is a special function prefixed with `@` that adds metadata or behavior to a class, method, or property.
>
>In NestJS, decorators like `@Controller()` and `@Get()` tell the framework how to handle routes and structure your app.
>
>They don’t run your logic — they describe how Nest should treat classes, methods, parameters, and even how to control access or transform data.

* npx @nestjs/cli generate module profiles
> **You generate a module when you’re creating a new feature/domain (e.g., users, auth, orders)**  
>
> Creates a new Profiles module inside your `src/` folder.
It generates `profiles.module.ts` and automatically registers it in `app.module.ts`.
>
>Running `generate module profiles` creates a dedicated place to build everything related to “profiles” (e.g., ProfileController, ProfileService).

* npx @nestjs/cli generate controller profiles
> **You generate a controller when that feature needs to handle HTTP requests.**
>
> Creates a **ProfilesController** inside the profiles folder.
A controller handles **incoming HTTP** requests (GET, POST, PUT, DELETE) and returns responses.
It also automatically registers the controller inside `profiles.module.ts`
>
> A controller decides what to do based on the request your API recieves, what functions to call and allowing your service layer to decide how to do it.

### Setting up Routes

#### @Get()
> `@Get()` handles HTTP GET requests.
>
>NestJS also provides `@Post()`, `@Put()`, `@Delete()`, `@Patch()`, etc., each mapping to the corresponding HTTP method.
>
>Example: `@Post()` handles creating data, `@Put()` updates data, and `@Delete()` removes data.

### @Query()
> Collects a parameter from the the **URL/API**  
> E.g: `http://localhost:3000/profiles?location=Durban`
> `@Query('location')` tells Nest: “Extract the query parameter named location from the URL.” In this case it would `Durban`

