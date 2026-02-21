# Typescript Tutorial

Installation

* npm install -g typescript

#### Declaring Variables

        let name: string = "Seithati";
        let age: number = 30;

Each variable must be assigned a type, E.g. name is type string shown as `let name: string`

#### Declaring Functions

        function greet(user: string): string {
        return "Hello " + user;
        }

The variable passed into the greet function is assign as string, show as `function greet(user: string)`. The data returned by the function is also assigned as string, shown as `function greet(user: string):` **`string`** `{`
It tells TypeScript that the function must return a value of type string.