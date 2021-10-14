//Declare three variables called “num1”, “num2” and “num3”. Assign each variable a number value.
let num1 = 4;
let num2 = 2;
let num3 = 3;

//Now write a conditional statement that compares “num1” and “num2” and displays the larger value
if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}

//Write a conditional statement that determines whether “num1” is odd or even and displays the result.
if (num1 % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

//write a JavaScript conditional statement to sort the three numbers from largest to smallest.
// first
if (num1 < num2 && num1 < num3) {
  if (num2 < num3) {
    console.log(num3, num2, num1);
  } else console.log(num2, num3, num1);
}
//second
if (num2 < num1 && num2 < num3) {
  if (num3 < num1) {
    console.log(num1, num3, num2);
  } else {
    console.log(num3, num1, num2);
  }
}
//thired
if (num3 < num2 && num3 < num1) {
  if (num2 < num1) {
    console.log(num1, num2, num3);
  } else {
    console.log(num2, num1, num3);
  }
}

/* Write a variables called amount . print "Please enter a positive number" if it is not positive.
 and print "Please enter a number" if the type of the argument is not a number. otherwise print the numbe*/
let amount = -5;
if (amount < 0) {
  console.log("Please enter a positive number");
} else if (isNaN(amount)) {
  console.log("Please enter a number");
} else {
  onsole.log(amount);
}

/*/Write two string variables , username and password, and print a string "login successful"
 if the username length is more than 6 and password length is more than or equal to 8 otherwise print "login failed."*/
let username = "dorrah";
let password = "hvjh93ygj";
if (username.length > 6 && password.length >= 8) {
  console.log("login successful");
} else {
  console.log("login failed");
}

// Now write a JavaScript while loop that will display the numbers 0 - 20.
let i = 0;
while (i < 20) {
  console.log(i);
  i++;
}

//Write a JavaScript for loop that will display the numbers 20 - 0.
for (let i = 0; i < 20; i++) {
  console.log(i);
}

// Next, create a for loop that will display all even numbers between 1 and 20.
for (let i = 1; i < 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

/*Write two variable startRange and endRange Assign each variable a number value like (5,8) or (6,18) .
 print a string of all the numbers in between the two values in an acceding order,*/
let startRange = 5;
let endRange = 8;
let sortresult = "";
for (let i = startRange; i <= endRange; i++) {
  sortresult += ` ${i} `;
}
console.log(`"${sortresult}"`);

//stars loop
let resstar = "*";
for (let i = 0; i < 5; i++) {
  console.log(resstar);
  resstar += "*";
}


