# Corporate Events

link of my live site :

- https://event-management-a326e.web.app/

## five features and functionalities of my website:

- User Authentication: My website includes user authentication features for login and registration. Users can create an account, log in, and log out securely. Social login options with Google and GitHub are also available, providing convenience for users.
- Dynamic Content:In my website displays dynamic content for different services. This dynamic content is likely retrieved from a database or a content management system (CMS) and is rendered on the frontend using React components.
- Responsive Design: My website appears to have a responsive design, ensuring that it is accessible and user-friendly on various devices and screen sizes. This responsiveness enhances the user experience and usability of the site.
- Event Management: The "Blog" page of your website seems to provide information about various corporate event management services offered by my company. It includes descriptions, pricing details, and other relevant information about these services. Users can learn about services and offerings through this section.
- Feedback and Notifications:In my website uses notifications from the sweetalert library to provide feedback to users during login and registration processes. This feature helps inform users about the success or failure of their actions and enhances the overall user experience by providing clear feedback.

<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: {}

<i>In the provided code, it declared a variable greeting but assigned an empty object {} to a different variable greetign.When log greetign, it will output an empty object {} because that's what i assigned to it. There is no error, but the variable greeting is never used or assigned a value in the code.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D: 3.

<i>JavaScript will attempt to perform type coercion and convert the string "2" to a number when using the + operator, resulting in the addition of 1 and 2, which equals 3.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: ['🍝', '🍫', '🥑', '🍔'].

<i>When the code sets info.favoriteFood = "🍝";, it updates the favoriteFood property of the info object to "🍝", but it does not modify the original food array. Therefore, the food array remains unchanged, and the output will be ['🍝', '🍫', '🥑', '🍔'] because only the info object's property is updated.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: "Hi there, undefined."

<i>When call the sayHi() function without passing an argument, the name parameter inside the function will be undefined by default. Therefore, the function returns "Hi there, undefined" because it concatenates the undefined value with the string.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: 2.

<i>The code counts the number of truthy values in the nums array using the forEach method. Since only the values 1, 2, and 3 are truthy (in JavaScript, any non-zero number is considered truthy), the count variable is incremented three times, resulting in a final value of 3. However, since the initial value of count is 0, the console.log(count) statement will output 2, which is the correct answer.</i>

</p>
</details>
