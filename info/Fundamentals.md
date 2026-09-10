# JS basics 📘

## JS Syntax: ✍️

- Comment in JS using '//'
- Terminate each line with ';'
- "console.log('Test');" that is called a statement in JS
- For strings single quotes ' are more common to the double quotes " while still both can be used
- Naming of the variables is in `camelCase`
- **Optional** parameters are labeled with `?` &rarr; `array.join(separator?: string);`

- Between these tags `<script></script>` inline JS can be written in HTML file or some file can be referenced
- NodeJS - is a runtime environment for executing JS code (build on Google V8 engine)

## Separation of concerns 🧩

- While JS code can be inline in the HTML file and be placed directly between `<script>` tags that is not a good design:
  an HTML document can blow with a lot of code (God Object) making it hard to read and support.
- HMTL - is all about content. JS - is all about behavior. They should be stored separately - separation of concerns.
- When including JS scripts to the HTML document the best practice is to include it at the end of the `<body>` section

### Reasons for that: 📌

1. Since browser is parsing the HMTL file from top to bottom, then in case that file is too large,
   then browser will be busy to execute/render JS code instead of rendering the actual page content (bad user experience)
2. Often in the JS code inline/external we want to reference some HTML tags/objects (like hide some HTML tags/objects on some condition or add some content to the `<div>` conditionally).
   In order to be sure that targeted tags/objects are already rendered by the browser, we should place the `<script>` tags at the very bottom of the `<body>` section

## Variables 📦

- By default variable will be `undefined` in case no value provided

```javascript
let a;
console.log(a); // undefined
```

- Two variables can be defined at once on the same line but the modern practice suggest to define each variable on a separate line

```javascript
// Allowed, not appreciated
let a = 'Test', b;

// Good approach
let c = 'Test';
led d = 'Test 2';
```

### `let` VS `var` ⚖️

- `var` was before ES6. From ES6 there is a good practice to use `let`

### `typeof` operator 🔍

```javascript
let a = "Test";
typeof a; // "string"
a = 5;
typeof a; // "number"

let b = undefined;
typeof b; // "undefined"

let c = null;
typeof c; // 'object'
```

## `const` identifier 🔒

- Once is used and value is given to the variable, then cannot be re-assigned

## Types of values 🏷️

### Primitive types / value types 🔢

- Number - no `float`/`double` and `int` segregation. There is one type for all of them
- String
- Boolean
- Undefined - when no value was assigned to the variable; except being a type `undefined` is also a certain value
- Null - is used when we want to mark that there is no value; can be used to clear a value of the varible
- Symbol

#### String methods
* `.split(separator: string)` &rarr; from the string produces new array with its values by given separator (if separator doesn't exists, then array with the initial string is returned as a single element)
```javascript
const str = "This is my first day!";

const splitted = str.split(' ');
console.log(splitted); // ['This', 'is', 'my', 'first', 'day!']

const joinedStr = splitted.join('-'); 
console.log(joinedStr); // This-is-my-first-day!
```

### Reference types 🔗

- Object
- Array
- Function

#### Object 🧱

- 📌 Is an entity that can have behavior (function inside it) or/and state (fields as internal variables)
- Is designed to group logically similar properties/functions

```javascript
let firstName = "Ivan";
let lastName = "Ivanov";

let person = { firstName: "Ivan", lastName: "Ivanov" };
```

##### Access of the properties 🚪

- Object functions/fields can be accessed via **dot notation** (object.propertyName) or **bracket notation** (object['propertyName'])
  - **bracket notation** is used when we don't know the name of the property on the `compile time` and we will get it during `runtime`

```javascript
let person = { firstName: "Ivan", lastName: "Ivanov" };

// Dot notation
console.log(person.firstName);

// Bracket notation
let choosenProperty = "lastName";
console.log(person[choosenProperty]);
```

- In case we attempt to acces the property with the name that **does not exist**, then it'll be simply added to an object

```javascript
let test = {};
console.log(a); // {}

test.a = 5;
console.log(a); // { a = 5 }
```

#### Array 📚

- 📌 Array is also an Object. By clicking `.` we can see some default methods/properties (like "arr.length")
- Is used to store multiple values in one collection.
- Elements of the array are not restricted to be **the same type**

##### Access of the elements 🎯

- Array elements are indexed starting from 0
- Elements are accessed using bracket notation (array[indexOfTheElement])
- In case we are accesing element of an array that is not existing, then you'll get **undefined**
- In case we are assigning value to an unexisting index of the array,
  then the array will extend it's length until that index and will assign desired value to the choosen index

```javascript
let arr = ["a", 5];
console.log(arr); // ['a', 5]

console.log(arr[1]); // 5
console.log(arr[2]); // undefined

arr[3] = "test";
console.log(arr.length); // 4
console.log(arr); // ['a', 5, empty, 'test']
console.log(arr[2]); // undefined
```

#### Function ⚙️

- 📌 Is a set of statements that performs a task or returns a value
- Function that doesn't return a value and changes the state of an object has **side effects**
- Function does have its signature and its body.
  - Signature is a function name + parameters.
  - Body is where all the statements are stored.

##### Argument VS parameter 🆚

- Parameter - is a declared input to the function at the time of declaration
- Argument - is an actual value that vas supplied for the parameter

```javascript
// Here 'input' is parameter
function test(input) {
  console.log(input);
}

test("Test"); // Here 'Test' is an argument

let a = 5;
test(a);
```

### Truthy & falsy values (additional information, not related strictly to the value/reference types) 🌓

- Only values that are of type `Boolean` can be **true** or **false**.
- Other values are either `truthy` (value can be casted to true) or `falsy` (value can be casted to false) when are used with the **logical operators**

#### Falsy values ❌

- ❌ undefined
- ❌ null
- ❌ 0
- ❌ false
- ❌ ''
- ❌ NaN (mathematical calculations that do not produce a valid `Number`, then this value is returned)

```javascript
console.log("test" - 5); // NaN
```

#### Truthy values ✅

> 💡 Anything that is not `falsy`

```javascript
let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor); // 'blue'
```

## Template literals (ES6+) 🧵

- 💡 **When to use** &rarr; helps avoid too much concatenations in case string should contain some values from the objects/variables and to be based on the runtime instead of being static
  - Formats text exactly we are seeing it &rarr; in case content between \` symbols is divided into multiple lines, then it'll be reflected on the string as it was inserted `\n` symbol
  - We can use placeholder `${}` in order to access varible/objects inside the string, also calculations are allowed inside that placeholder
- Syntax:

```javascript
`some text: ${someVariableOrObjectField}`;
```

### Example 💡

```javascript
const person = {
  firstName: "Ivan",
  lastName: "Alekseev",
};

console.log(
  `Hello, my name is ${person.firstName} ${person.lastName}. Age is ${50 + 25} years`,
);
```

---

# Operators ➕

## Operator `**` 💪

- Sets one value to the power of another

```javascript
console.log(5 ** 2); // 25
```

## Equality 🟰

- Check whether values are equal

### Types 🏷️

- Strict equality operator &rarr; check **considering the type**: `===`
- Lose equality operator &rarr; check **NOT considering the type**: `==`

```javascript
console.log(false === 0); // false

// Since false is a "falsy" value it can be converted to true
console.log(false == 0); // true

console.log("0" == 0); // true
```

## Conditional 🔀

### "For in" loop 🔁

- Allows to loop through all the **enumerable properties (keys)** of an object
- Can technically be used on arrays too, but it iterates over the **indexes as strings** and is not recommended for that purpose &rarr; use `for of` instead

```javascript
const person = { firstName: "Ivan", lastName: "Alekseev", age: 30 };

for (const key in person) {
  console.log(key, ":", person[key]);
}

/*
firstName : Ivan
lastName : Alekseev
age : 30
*/
```

### "For of" loop 🔂

- Allows to loop though all the **values** of an iterable collection (`Array`, `String`, `Map`, `Set`, etc.)
- Preferred over `for in` when working with arrays since it returns the actual values instead of the indexes

```javascript
const hobbies = ["programming", "reading", "gaming"];

for (const hobby of hobbies) {
  console.log(hobby);
}

/*
programming
reading
gaming
*/
```

---

# Objects 🧱

## Basics 📖

- 📌 Object is a collection of key-value pairs. Key is a name of the object field and value can be among all possible value/reference types
- Another definition of `object` can be - it's just a collection of key-value pairs (like a Map<String, Object> in Java)

```javascript
const person = {
  firstName: "Ivan",
  lastName: "Alekseev",
  age: 30,
  sex: "male",
  isAlive: true,
  diseases: null,
  hobbies: ["programming", "reading", "gaming"],
  girlfriend: {
    firstName: "Anna",
    lastName: "Petrova",
    age: 28,
  },
  speak: function (words) {
    console.log(`${this.firstName} ${this.lastName} says: ${words}`);
  },
};
```

## Object creation 🏗️

### Factory functions 🏭

- Function that **creates objects internally**. Can have explicit parameters.
  - Input parameters: values object fields to obtain
  - Role: `create` an object and populate it with parameters
  - How the object gets delivered: we simply `return` it
- Naming convention: `create<NameOfTheEntity>`

```javascript
function createPerson(
  firstName,
  lastName,
  age,
  sex,
  isAlive,
  diseases,
  hobbies,
  girlfriend,
) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    sex: sex,
    isAlive: isAlive,
    diseases: diseases,
    hobbies: hobbies,
    girlfriend: girlfriend,
    speak: function (words) {
      console.log(`${this.firstName} ${this.lastName} says: ${words}`);
    },
  };
}

console.log(
  createPerson(
    "Ivan",
    "Alekseev",
    25,
    "male",
    true,
    ["flu"],
    ["programming", "reading"],
    "Anna",
  ),
);
console.log(
  createPerson(
    "Bob",
    "Martin",
    60,
    "male",
    true,
    null,
    ["programming", "reading"],
    "Janet",
  ),
);
```

### `new` operator ✨

- This operator creates new empty Object `{}`, then ties `this` to point to that object and finally returns an object from the function
  - In case `return` clause was explicit with some **primitive**: then the originally created object will be returned
  - In case `return` clause was explicit with some **other object**: then another object will be returned, not the one tied to `this`
  - In case `return` clause was **NOT** explicit: then the originally created object will be returned
- Typically after that keywoard a `constructor function` is called. However, it's not restricted and whatever function can be called
- Once the function is called then as implicit parameter that empty object is passed to the function. Once function receive an object it can be accessed via `this` keyword
- JS engine translates all the object literal creations from `let x = {};` to `let x = new Object();` implicitly

```javascript
// Still a constructor functions even though is not following naming convention
function test() {
  this.name = "Ivan";
  this.age = 30;
}

const b = new test();
console.log(b); // { "name": "Ivan", "age": 30 }

function test2() {
  this.name = "Ivan";
  this.age = 30;
  return 5;
}

function test3() {
  this.name = "Ivan";
  this.age = 30;
  return { message: "Hello world" };
}

const primitive = new test2();
const anotherObject = new test3();

console.log(primitive); // { "name": "Ivan", "age": 30 }
console.log(anotherObject); // { "message": "Hello world" }
```

### Constructor functions 🛠️

- 📌 Function that **receives an object via parameter** and populates it with the fields. Can have explicit parameters.
  - Implicit parameters: zero parameter that is not visible actually passes an object
  - Input parameters: values object fields to obtain
  - Role: `receive` an object and populate it with fields
  - How the object gets delivered: the `new` keyword will return the object without explicit need for the `return` keyword
- Naming convention: `<NameOfTheEntity>`

```javascript
function Person(
  firstName,
  lastName,
  age,
  sex,
  isAlive,
  diseases,
  hobbies,
  girlfriend,
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.sex = sex;
  this.isAlive = isAlive;
  this.diseases = diseases;
  this.hobbies = hobbies;
  this.girlfriend = girlfriend;
}

const person1 = new Person(
  "Ivan",
  "Alekseev",
  25,
  "male",
  true,
  ["flu"],
  ["programming", "reading"],
  "Anna",
);
const person2 = new Person(
  "Bob",
  "Martin",
  60,
  "male",
  true,
  null,
  ["programming", "reading"],
  "Janet",
);
```

## Object dynamic nature 🔄

- Once created, the object can be modified in terms of fields that exists in it: they can be added, removed, modified

```javascript
let a = {
  speak: function () {
    console.log("Hello world!!!");
  },
};
a.speak(); // Hello world!!!

a.speak = function () {
  console.log("Hello world 2!!!");
};
a.speak(); // Hello world 2!!!

delete a.speak;
a.speak(); // Exception: a.speak is not a function
```

## Constructor 🧬

- 📌 It's a property every object has that indicates/references the function that was used to create an object

```javascript
function Circle() {
  this.radius = 1;
}

const circle1 = new Circle();
const circle2 = { radius: 1 };

console.log(circle1.constructor);
/*
f Circle() {
	this.radius = 1;
}
*/

console.log(circle2.constructor);
/*
f Object() { [native code] }
*/
```

### Built-in constructors 🏛️

- Object() &rarr; `let test = {};` will also use that c-tor
- String() &rarr; 'test', "test", \`test\` will use that c-tor
- Number() &rarr; `let test = 1;` will also use that c-tor
- Boolean() &rarr; `let test = true;` will also use that c-tor

## Traverse elements of object 🚶

- There is a loop `for in` designed to traverse through all the fields of an object
- Additionally, there is an operator that can check whether certain String literall appears among **keys** of an object: `in` operator

```javascript
const person = {
  firstName: "Ivan",
  lastName: "Alekseev",
};

for (const key in person) {
  console.log(key, ":", person[key]);
}

/*
firstName : Ivan
lastName : Alekseev
*/

console.log("firstName" in person); // true
```

### Traverse keys/entries of an object 🗝️

- `Object.keys` &rarr; access array with object key names
- `Object.entries` &rarr; access map with object key names and corresponding values to them

```javascript
const person = {
  firstName: "Ivan",
  lastName: "Alekseev",
};

for (const key of Object.keys(person)) {
  console.log(key, ":", person[key]);
}

/*
firstName : Ivan
lastName : Alekseev
*/

for (const key of Object.entries(person)) {
  console.log(key[0], ":", key[1]);
}

/*
firstName : Ivan
lastName : Alekseev
*/
```

## Cloning/copying an object 📋

- We can copy/clone object by simply traversing all the key-value pairs and add all the key-value pairs from one object to another
- `Object.assign(<object to fill>, <object to take properties from>)` &rarr; takes an object to fill with properties, then traverse object from 2-nd argument and copies all the fields from it to the first argument
- Spread operator `...<object>` &rarr; literally says **"take all the fields from the given object and copy them into object literal e.g. new empty object"**

```javascript
const person = {
  firstName: "Ivan",
  lastName: "Alekseev",
};

// An old way
let personCopy = {};
for (const key in person) {
  personCopy[key] = person[key];
}

console.log(personCopy);

/*
firstName : Ivan
lastName : Alekseev
*/

// Newer approach
const personCopy2 = Object.assign({}, person); // Travers

console.log(personCopy2);

/*
firstName : Ivan
lastName : Alekseev
*/

const personCopy3 = { ...person };
console.log(personCopy3);

/*
firstName : Ivan
lastName : Alekseev
*/
```

## Memory management 🧠

- 📌 Memory is allocated automatically once we create an object (via object literal `{ ... }` or via `new` operator) and we should not manage it.
- Garbage collector finds values/references that are not longer used and then it'll deallocate memory that was reserved for these variables
- Even if we want, we cannot control memory allocation/deallocation

---

# Functions ⚙️

- 📌 Every `Function` is an `Object`. Under the hood every function is created from the `Function()` constructor function

```javascript
function Circle() {
  this.radius = 1;
}

const Circle2 = new Function(`
    this.radius = 1;
`);

// Both are valid objects and Circle2 perfectly replicates Circle constructor function
const circle = new Circle2();
const circle2 = new Circle();

console.log(Circle.constructor); // f Function() { [native code] }
console.log(Circle2.constructor); // f Function() { [native code] }
```

## Methods 🔧

- `call()` &rarr; with that method the function is called. First argument is an object referenced by `this`, the other are real function parameters

```javascript
function Circle(radius) {
  this.radius = radius;
}

// Bottom 2 are basically the same
const c1 = Circle.call({}, 1);
const c2 = new Circle(1);
```

- `apply()` &rarr; almost the same as `call()` with the only difference that parameters after the first one can be passed in the array format

```javascript
function Circle(radius, perimeter) {
  this.radius = radius;
  this.perimeter = perimeter;
}

// Bottom 3 are basically the same
const c1 = Circle.apply({}, [1, 2]);
const c2 = new Circle(1, 2);
const c3 = Circle.call({}, 1, 2);
```

## Primitive & reference types arguments 🔀

- 🔹 **Primitive type** argument - is literally copied once is passed to the function. Everything that happens to that value inside a function is not connected with the actual variable given to it.
- 🔗 **Reference type** argument - is passed **by the reference** to the function. All the changes made inside that function to that variable are reflected on it.

---

# Arrays 📚

## General info
* Arrays are `objects`, so their properties can be retrieved via dot `.` notation

## Iterating an array

### Using `for()` loop
```javascript
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}
```

### Using `forEach()` function
* Has optional paremter to retrieve **index** of the element
```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index) => console.log(`Index: ${index}, Number: ${number}`));
```

## General purpose methods

### Adding elements
* Add elements to the very **end** &rarr; `.push(...items: number[])` 
* Add elements to the very **start** &rarr; `.unshift(...items: number[])`
* Add elements to the **whatever position** &rarr; `.splice(startIndex: number, elementsToDeleteFromThatIndex: number, ...items: number[])`
```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.splice(1, 2, ...[6, 7]);
console.log(numbers);
// [ 1, 6, 7, 4, 5]

numbers.splice(1, 0, ...[9, 8]);
console.log(numbers);
// [ 1, 9, 8, 6, 7, 4, 5]
```

### Finding elements

#### Value search
* `indexOf(val: number, fromIndex: number)` &rarr; index of element if exists, otherwise **-1**
* `lastIndexOf(val: number, fromIndex: number)` &rarr; index of element if exists, otherwise **-1**
* `includes(val: number, fromIndex: number)` &rarr; **true** in case element exists

#### Predicate search
* `find(function predicate() {...})` &rarr; **true** in case element exists
* `findIndex(function predicate() {...})` &rarr; index of element if exists, otherwise **-1**

#### Primitives
```javascript
const numbers = [1, 2, 3, 4, 5, 3];

console.log(numbers.indexOf(2)); // 1
console.log(numbers.lastIndexOf(3)); // 5
console.log(numbers.includes(9)); // false
```

#### Reference types
* By default reference types are check by the **reference equality** &rarr; that's why they should be searched for by the **predicate functions**
```javascript
const courses = [
  { id: 1, name: "JavaScript Basics", duration: "3 hours" },
  { id: 2, name: "Advanced React", duration: "5 hours" },
];

const foundCourse = courses.find(function(course) {
    return course.name === "Advanced React";
});

console.log(courses.includes({ id: 2, name: "Advanced React", duration: "5 hours" })); // false
console.log(foundCourse); // { id: 2, name: "Advanced React", duration: "5 hours" }
```

#### Arrow functions (lambda functions)
```javascript
const courses = [
  { id: 1, name: "JavaScript Basics", duration: "3 hours" },
  { id: 2, name: "Advanced React", duration: "5 hours" },
];

// With plain function
// const foundCourse = courses.find(function(course) {
//     return course.name === "Advanced React";
// });

// With arrow function
const foundCourse = courses.find(course => course.name === "Advanced React");

console.log(foundCourse);
```

### Removing elements
* Remove element from the very **end** &rarr; `.pop()` 
* Remove element from the very **start** &rarr; `.shift()`
* Remove element(s) from the **whatever position** &rarr; `.splice(startIndex: number, elementsToDeleteFromThatIndex: number)`
```javascript
const numbers = [1, 2, 3, 4, 5];

const popF = numbers.pop();

console.log('After pop:', numbers); // [1, 2, 3, 4]
console.log('Popped value:', popF); // 5

const shiftF = numbers.shift();

console.log('After shift:', numbers); // [2, 3, 4]
console.log('Shifted value:', shiftF); // 1

const spliceF = numbers.splice(1, 2);

console.log('After splice:', numbers); // [2, 4]
console.log('Spliced values:', spliceF); // [3, 4]
```

#### Emptying of the array
1. Assigning to the **new empty array** (is not good when **multiple references** exist to the same array)
2. Set `length` to **0**
3. Splicing from 0 index till the last index
```javascript
const numbers = [1, 2, 3, 4, 5];

// 1 variant
// numbers = [];

// 2 variant
// numbers.length = 0;

// 3 variant
// numbers.splice(0, numbers.length);
```

### Combining & slicing
> Operations are returning new modified array, not doing the `in-place` edit

> `Primitives`: **values** are copied/removed, `Reference types`: **references** are copied/removed

#### Methods
* `.concat(array: number[])` 
* `.slice(inclusiveFromIndex: number, exclusiveToIndex: number)`
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);

const concatF = numbers.concat(doubledNumbers);

console.log(numbers); // original array
console.log(concatF); // concatenated array with doubled numbers

const slicedNumbers = numbers.slice(2, 4);

console.log(numbers); // original array
console.log(slicedNumbers); // [3, 4]
```

#### Using `... spread operator` for combining arrays (ES6)
* Spread operator &mdash; is an operator thar decomposes one array into to separate its elements (is working similar to the Java `varargs` operator)
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);

const combined = [...numbers, ...doubledNumbers];

console.log(combined); // [1, 2, 3, 4, 5, 2, 4, 6, 8, 10]
```

### Join the elements
* `join(separator: string)` &rarr; create a string and after each element insert a separator **excluding the last one**
```javascript
const numbers = [1, 2, 3, 4, 5];

const joinedArr = numbers.join(', ');

console.log(joinedArr); // 1, 2, 3, 4, 5
console.log(typeof joinedArr); // string
```

### Sorting
* `.sort(compareFn?: ((a: number, b: number) => number) | undefined)` &rarr; **in-place** method to sort an array in **ascending order** by default or is using a **compare function** if provided
> `.sort()` performs sorting in ascending order over the values that are **converted to strings** in case `no comparator function (predicate) was supplied`. String values are compared by the **ASCII table**

```javascript
const numbers = [1, 2, 3, 4, -1, 352, -12, 1];

numbers.sort();
console.log(numbers); // [-1, -12, 1, 1, 2, 3, 352, 4]

numbers.sort((a, b) => {
    if (a < b) {
        return -1;
    } else if (a == b) {
        return 0;
    } else {
        return 1;
    }
});
console.log(numbers); // [-12, -1, 1, 1, 2, 3, 4, 352]

numbers.reverse();
console.log(numbers); // [352, 4, 3, 2, 1, 1, -1, -12]
```

## Predicate checks
* `some(predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any)` &rarr; returns `true` if **at least one** array element is satisfying the predicate
* `every(predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any)` &rarr; returns `true` if **every** array element is satisfying the predicate
```javascript
const numbers = [1, 2, 3, 4, -1, 352, -12, 1];

console.log(numbers.every(number => number > 0)); // false
console.log(numbers.some(number => number === 352)); // true
```

## Filtering
* `filter(predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any)` &rarr; retains only elements satisfying the predicate criteria
> Is not `in-place` change. Is returing a modified copy of the initial array

```javascript
const numbers = [1, 2, 3, 4, -1, 352, -12, 1];

console.log(numbers.filter(number => number != 1)); // [2, 3, 4, -1, 352, -12]
```

## Mapping an array
* `map()` &rarr; a function that accepts another **producer function** that will iteratively perform some changes to each array element. As a result result modified copy of an array.
```javascript
const numbers = [1, 2, 3, 4];

const mapped = numbers.map(number => `<li>${number}</li>`);

console.log(`<ul>${mapped.join('')}</ul>`); // <ul><li>1</li><li>2</li><li>3</li><li>4</li></ul>
```

## Reducing an array
* `reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]))` &rarr; a function that reduces array to one element. Over each array element operation can be performed and accumulation function parameter will hold the reduced array
```javascript
const numbers = [1, 2, 3, 4];

const reduced = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(reduced); // 10
```