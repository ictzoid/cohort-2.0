// Arrays
const menuItems = [
  "Overview",
  "Dashboard",
  "Settings",
  "Profile",
  20,
  false,
  "Help",
  "Contact Us",
];
// console.log(menuItems[0]);

// Objects
// const user = {
//   name: "Samuel",
//   age: 10,
//   email: "samuel@example.com",
// };

// console.log(user.age);

// if (user.age >= 18) {
//   console.log("User is an adult.");
// } else {
//   console.log("User is a minor.");
// }

const user1 = {
  name: "Samuel",
  age: 10,
  isMarried: true,
  email: "samuel@gmail.com",
};

const user2 = {
  name: "John",
  age: 20,
  isMarried: false,
  email: "john@gmail.com",
};
const user3 = {
  name: "Jane",
  age: 30,
  isMarried: true,
  email: "jane@gmail.com",
};

const users = [user1, user2, user3];

// Control flow statements
// examples of control flow statements in JavaScript include
// 1. if-else statements,
// let studentGrade = 70;

// if (studentGrade >= 90) {
//   console.log("You got an A!");
// } else if (studentGrade >= 80) {
//   console.log("You got a B!");
// } else if (studentGrade >= 70) {
//   console.log("You got a C!");
// } else if (studentGrade >= 60) {
//   console.log("You got a D!");
// } else {
//   console.log("You got an F!");
// }
// 2. switch statements, and
// switch (studentGrade) {
//   case 90:
//     console.log("You got an A!");
//     break;
//   case 80:
//     console.log("You got a B!");
//     break;
//   case 70:
//     console.log("You got a C!");
//     break;
//   case 60:
//     console.log("You got a D!");
//     break;
//   default:
//     console.log("You got an F!");
// }

// 3. loops (for, while, do-while).

// const numbers = [1, 2, 3, 4, 5];

for (let index = 0; index < users.length; index++) {
  if (users[index].name === "Samuel") {
    console.log("A user with the name Samuel was found.");
  }
}

// These statements allow you to control the flow of your program based on certain conditions
// or to repeat actions multiple times.
