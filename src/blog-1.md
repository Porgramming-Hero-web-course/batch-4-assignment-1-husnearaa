# Typescript
TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.



## The Benefits of Using TypeScript

JavaScript is a flexible language, because it doesn’t enforce types, it can be hard to know exactly what kind of data is being used at any given time.

In JavaScript, function parameters and variables don’t tell you what type of data they expect, so you either need to check the documentation or guess from the code itself.

TypeScript solves this problem by letting you define the types of data you're working with. It will also catch mistakes when the types don’t match.

For example, if you try to send a string to a function that expects a number, TypeScript will let you know about the error right away. JavaScript, on the other hand, won’t warn you and will allow it to run.



## Types of Typescript
There are many types of typescripts. The typeScript types can be divided into primitive and non-primitive categories.

### Primitive Types in TypeScript
Primitive types are the basic data types that represent simple values.

- **Number**: Represents numeric values.  
  Examples: `42`, `3.14`.

- **String**: Represents textual data.  
  Examples: `"hello"`, `"world"`.

- **Boolean**: Represents `true` or `false` values.

- **Null**: Represents an explicitly empty value, useful for intentional absence of any object value.

- **Undefined**: Represents an uninitialized value, indicating that a variable has been declared but not assigned a value.






### Non-Primitive Types in TypeScript

Non-primitive types include more complex structures, often used for organizing and manipulating data:

- **Objects**: A collection of key-value pairs.  
  Example: `{ name: string; age: number }`

- **Arrays**: A list of items of a specific type.  
  Example: `string[]`, `Array<number>`

- **Tuples**: A fixed-length array with specified types for each element.  
  Example: `[string, number]`

- **Enums**: A set of named constants.  
  Example: `enum Color { Red, Green, Blue }`

- **Functions**: Defines parameter and return types for functions.  
  Example: `(x: number, y: number) => number`

- **Union Types**: Allows a variable to hold any of a set of specified types.  
  Example: `string | number`

- **Intersection Types**: Combines multiple types into one.  
  Example: `TypeA & TypeB`

- **Interfaces**: Defines the structure of an object.  
  Example: `interface User { name: string; age: number }`

- **Type Aliases**: Allows creating a custom name for a type.  
  Example: `type ID = string | number`



So, Now i will explain in details about Union Types and Intersection Types.

## What is Union Types in Typescript?
A union type describes a value that can be one of several types.Its specified using (|) symbol.It is used to manage complex object.

### Example of Union

type Book = {
    id: string | number;
    title: string;
    author: string;
    publishedYear: number;
    format: 'hardcover' | 'paperback' | 'ebook'; 
    pages?: number;
}

const book1: Book = {
    id: "B124",  
    title: "The Art of Thinking Clearly",
    author: "Rolf Dobelli",
    publishedYear: 2011,
    format: "hardcover",
    pages: 368,
}

const book2: Book = {
    id: 124,  
    title: "The Art of Thinking Clearly",
    author: "Rolf Dobelli",
    publishedYear: 2011,
    format: "ebook"
}


Here the id in the Book object can either be a string or a number, which i have specified using string | number  and the format property is also a union type that can be one of 'hardcover', 'paperback', or 'ebook'. The pages is optional and may or may not be included in the book object.



## what is intersection types in typescript?
An intersection type is a type that combines two or more types to create a new type that has all properties of the existing types.

### Example of Union

type Book = {
    id: number;
    title: string;
}

type Publisher = {
    name: string;
    country: string;
}

type BookDetails = Book & Publisher;

const bookDetails: BookDetails = {
    id: 1,
    title: "The Art of Thinking Clearly",
    name: "HarperCollins",
    country: "USA"
}



Here, the basic structure of a book defines by id and title. The publisher's information defines by name and country. Then it has combined by the Book and Publisher types using the & (intersection) operator. Then an object that includes properties from both Book and Publisher.

