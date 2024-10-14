---
title: Programming Introduction
description: A guide in my new Starlight docs site.
---


## Programming Language
A programming language is a formal language comprising a set of instructions that can be used to produce various kinds of output. Programmers use these languages to communicate with computers and write software programs, scripts, or applications that execute specific tasks. In simpler terms, it's how humans tell computers what to do.
- What, why?
- Src code, Compiler, Binary Language
- Compiler
- IDE

### Types of Programming Languages
##### High-Level Languages:
 These are closer to human language and include languages like Python, Java, and C++. They are easier to read and write but are eventually translated into machine code for the computer to understand.

##### Low-Level Languages:
 These are closer to machine code (binary) and include Assembly language. They are harder to read but provide more control over the hardware.


### Source Code
Source code refers to the human-readable set of instructions written by a programmer in a specific programming language. It's the original form of a program before it is converted into a form that a computer can understand.

Source code can include instructions like calculations, decision-making logic, and data handling. It must be translated into machine code or an intermediate form for the computer to execute it.


### Compiler
A compiler is a special program that translates the source code written in a high-level programming language into machine code or binary code (0s and 1s). This machine code is what the computer's CPU understands and can execute directly.

### Binary Language (Machine Code)
Binary language, also known as machine code, is the lowest-level representation of code that computers can process. It is a sequence of 0s and 1s (binary digits) that correspond directly to instructions the computer’s processor understands.

For example, a simple instruction like "add two numbers" could look like 101010 in binary language. Humans don’t typically write programs in binary because it’s tedious and hard to understand, which is why we use high-level programming languages and compilers to generate binary code.


### Integrated Development Environment (IDE)
An Integrated Development Environment (IDE) is a software suite that provides tools for writing, testing, and debugging programs all in one place. It combines several features to make coding easier and more efficient for developers.

###### Examples of popular IDEs:

- Visual Studio Code: A widely used IDE for many languages like JavaScript, Python, and more.
- PyCharm: Specifically designed for Python development.
- Eclipse: Primarily used for Java but supports many other languages.

## C++ Syntax fundamentals
##### int main(){}
- Purpose: This is the entry point of a C++ program.
- int: Specifies that the function returns an integer.
- main(): The function name; every C++ program must have a main function.
- {}: Defines the start and end of the code block for the main function.
##### print
- Purpose: In C++, print is not a predefined function. The C++ standard uses cout for output. However, in other languages, like Python, print is used to display output.
##### cout
- Purpose: Short for "character output," cout is used to print or display data to the console.
- Usage: It is part of the iostream library and outputs text or variables to the screen.

```
cout << "Hello, World!";
```
##### << (Stream Insertion Operator)
- Purpose: This is the stream insertion operator used with cout to send data to the output stream (the console).
```
cout << "Hello" << " World!";
```

##### endl
- Purpose: Stands for "end line." It is used to move the cursor to the next line in the console.
- Usage: It inserts a newline character and flushes the output buffer.
```
cout << "Hello" << endl;
```
##### \n (Newline Character)
- Purpose: This is an escape sequence that represents a newline. It moves the cursor to the next line, similar to endl, but it doesn't flush the buffer.
```
cout << "Hello\n";
```
##### ; (Semicolon)
- Purpose: In C++, every statement must end with a semicolon (;). It tells the compiler that the statement is complete.
```
int x = 10;
```

### Data types and variables
##### int
- Purpose: Represents integer values (whole numbers, both positive and negative).
- Size: Typically 4 bytes (32 bits), providing a range of approximately -2 billion to +2 billion (-2^31 to 2^31 - 1).

Example:

```
int age = 25;
cout << "Age: " << age << endl;
```
##### char
- Purpose: Represents a single character or a small integer. Stores one character in single quotes ('A', '1', etc.).
- Size: 1 byte (8 bits), which can hold 256 different values (-128 to 127).

Example:

```
char grade = 'A';
cout << "Grade: " << grade << endl;
```
##### bool
- Purpose: Represents boolean values, i.e., true or false.
- Size: Typically 1 byte.
- Values: true (1) or false (0).

Example:

```
bool isPass = true;
cout << "Passed the exam: " << isPass << endl;  // Outputs1 (true)
```
##### float
- Purpose: Used to store floating-point numbers (decimals). It's less precise than double.
- Size: Typically 4 bytes, with a precision of about 6-7 decimal digits.

Example:

```
float temperature = 36.6;
cout << "Body temperature: " << temperature << "°C" << endl;
```
##### double
- Purpose: Used for double-precision floating-point numbers. It has a higher precision than float.
- Size: Typically 8 bytes, with a precision of about 15-16 decimal digits.

Example:

```
double pi = 3.14159265358979;
cout << "Value of Pi: " << pi << endl;
```
##### Variable Naming Conventions
- Rules:
    - Must start with a letter or underscore (e.g., myVar, _temp).
    - Cannot start with a number (e.g., 1var is invalid).
    - No spaces or special characters except for _.
    - Case-sensitive (myVar and MyVar are different).
    - Avoid using reserved keywords like int, float, if, etc.
Example:
```
int totalMarks = 85;   // Correct
int _value = 50;       // Correct
int 1stNumber = 10;    // Incorrect, cannot start with a number
```
##### How Data Is Stored and Accessed
- Storage: Data is stored in binary (0s and 1s) in memory (RAM).
- Access: Variables represent memory locations. The CPU accesses these locations using addresses to perform operations.

Example:

```
int x = 10; // 'x' is stored in memory and holds the value 10
cout << "Value of x: " << x << endl;  // Accesses and displays the value stored in 'x'
```
##### Negative Numbers
- Representation: Negative numbers in binary are stored using a method called two's complement. This makes subtraction easier and avoids having two zeros (positive and negative zero).

Example:

```
int negativeNum = -10;
cout << "Negative number: " << negativeNum << endl;  // Displays -10
```
##### ASCII Table Importance
- Purpose: ASCII (American Standard Code for Information Interchange) maps characters (letters, digits, symbols) to numerical codes. It helps in character data representation within computers.
     - For example, 'A' is 65, and 'a' is 97 in ASCII.

Example:

```
char letter = 'A';  // ASCII value of 'A' is 65
cout << "ASCII value of A: " << int(letter) << endl;  // Outputs 65
```
##### Type Casting
- Purpose: Converts one data type into another (e.g., int to float or char to int).

Example:

```
int num = 10;
float numFloat = (float)num;  // Explicit casting from int to float
cout << "Number as float: " << numFloat << endl;
```
##### How Negative Numbers Are Stored (Two's Complement)
- Two's Complement: The most common method of representing negative numbers. In this system, the leftmost bit is the sign bit:
    - 0 for positive, 1 for negative.
    - To get the two’s complement, invert all the bits and add 1.

Example:

```
int num = -5;
cout << "Negative number: " << num << endl;  // Internally stored using two's complement
```
##### Operators
- Purpose: Symbols that perform operations on variables and values. Types include arithmetic, relational, logical, and bitwise operators.
    - Example: +, -, *, / are arithmetic operators.

Example:

```
int a = 10, b = 5;
cout << "Addition: " << a + b << endl;  // Outputs 15
cout << "Subtraction: " << a - b << endl;  // Outputs 5
cout << "Multiplication: " << a * b << endl;  // Outputs 50
cout << "Division: " << a / b << endl;  // Outputs 2
```
##### Relational Operators
- Purpose: Compare two values and return a boolean (true or false).
- Examples:
    - ==: Equal to
    - !=: Not equal to
    - >: Greater than
    - <: Less than
    - >=: Greater than or equal to
    - <=: Less than or equal to

Example:

```
int x = 10, y = 20;
cout << (x == y) << endl;  // Outputs 0 (false)
cout << (x != y) << endl;  // Outputs 1 (true)
cout << (x > y) << endl;   // Outputs 0 (false)
cout << (x < y) << endl;   // Outputs 1 (true)
```
##### Logical Operators
- Purpose: Used to combine or invert boolean values.
- Examples:
    - &&: Logical AND (true if both operands are true).
    - ||: Logical OR (true if at least one operand is true).
    - !: Logical NOT (inverts the value).

Example:

```
bool a = true, b = false;
cout << (a && b) << endl;  // Logical AND, outputs 0 (false)
cout << (a || b) << endl;  // Logical OR, outputs 1 (true)
cout << (!a) << endl;      // Logical NOT, outputs 0 (false)
```
##### Bitwise Operators
- Purpose: Perform operations on bits of integer values.
- Examples:
    - &: Bitwise AND (sets each bit to 1 if both bits are 1).
    - |: Bitwise OR (sets each bit to 1 if at least one bit is 1).
    - ^: Bitwise XOR (sets each bit to 1 if the bits are different).
    - ~: Bitwise NOT (inverts all the bits).
    - <<: Left shift (shifts bits to the left).
    - `>>: Right shift (shifts bits to the right).

Example:

```
int x = 5;  // Binary: 0101
int y = 3;  // Binary: 0011
cout << (x & y) << endl;   // Bitwise AND, outputs 1 (0001)
cout << (x | y) << endl;   // Bitwise OR, outputs 7 (0111)
cout << (x ^ y) << endl;   // Bitwise XOR, outputs 6 (0110)
cout << (~x) << endl;      // Bitwise NOT, outputs -6
cout << (x << 1) << endl;  // Left shift, outputs 10 (1010)
cout << (x >> 1) << endl;  // Right shift, outputs 2 (0010)
```

## Conditionals
### if Statement
The if statement allows you to execute a block of code only if a specified condition is true.

syntax:
```
if (condition) {
    // code to execute if condition is true
}

```

Example
```
int num = 10;
if (num > 5) {
    cout << "Number is greater than 5" << endl;
}
```
### else Statement
The else statement is used with if. It specifies a block of code to execute if the condition in the if statement is false.

syntax:
```
if (condition) {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}
```

Example
```
int num = 3;
if (num > 5) {
    cout << "Number is greater than 5" << endl;
} else {
    cout << "Number is less than or equal to 5" << endl;
}
```
### else if Statement
The else if statement is used to check multiple conditions. It is executed if the previous if condition is false but this condition is true.

syntax:
```
if (condition1) {
    // code to execute if condition1 is true
} else if (condition2) {
    // code to execute if condition2 is true
} else {
    // code to execute if both conditions are false
}
```

Example
```
int num = 7;
if (num > 10) {
    cout << "Number is greater than 10" << endl;
} else if (num == 7) {
    cout << "Number is 7" << endl;
} else {
    cout << "Number is less than or equal to 10 but not 7" << endl;
}
```
### switch Statement
The switch statement allows you to execute one code block from many based on the value of a variable.

syntax:
```
switch (variable) {
    case value1:
        // code to execute if variable == value1
        break;
    case value2:
        // code to execute if variable == value2
        break;
    default:
        // code to execute if none of the cases are true
}
```

Example
```
int day = 2;
switch (day) {
    case 1:
        cout << "Monday" << endl;
        break;
    case 2:
        cout << "Tuesday" << endl;
        break;
    default:
        cout << "Invalid day" << endl;
}
```

## Loops
### while Loop
The while loop repeats a block of code as long as the given condition is true.

syntax:
```
while (condition) {
    // code to execute
}
```

Example
```
int count = 1;
while (count <= 5) {
    cout << "Count: " << count << endl;
    count++;
}
```
### do-while Loop
The do-while loop is similar to the while loop, but it guarantees that the code inside the loop will run at least once, even if the condition is false from the start.

syntax:
```
do {
    // code to execute
} while (condition);
```

Example
```
int count = 1;
do {
    cout << "Count: " << count << endl;
    count++;
} while (count <= 5);
```
### for Loop
The for loop is commonly used when you know in advance how many times you want to execute a statement or block of code.

syntax:
```
for (initialization; condition; update) {
    // code to execute
}
```

Example
```
for (int i = 1; i <= 5; i++) {
    cout << "i: " << i << endl;
}
```
### break and continue
- break: Terminates the loop prematurely.
- continue: Skips the current iteration and continues with the next iteration.

Example (break):
```
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        break;  // Stops the loop when i equals 3
    }
    cout << "i: " << i << endl;
}
```

Example (continue):
```
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;  // Skips the rest of the loop when i equals 3
    }
    cout << "i: " << i << endl;
}
```
### Nested Loops
You can place one loop inside another. This is called nesting loops.

Example:
```
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 2; j++) {
        cout << "i: " << i << ", j: " << j << endl;
    }
}

```

## Pass by Value and Pass by Reference
### Pass by Value
- Definition: When a function is called with pass by value, a copy of the actual argument is passed to the function.
- Effect: Modifying the parameter inside the function does not affect the original argument in the calling function.
- Usage: Used when you want to preserve the original value and do not want changes to the passed argument.

```
#include <iostream>
using namespace std;

void passByValue(int x) {
    x = 20;  // This change won't affect the original variable
}

int main() {
    int a = 10;
    passByValue(a);
    cout << "Value of a after passByValue: " << a << endl;  // Output: 10
    return 0;
}

```

###  Pass by Reference
- Definition: In pass by reference, the reference (or alias) to the actual argument is passed, meaning both the parameter and argument refer to the same memory location.
- Effect: Modifying the parameter inside the function does affect the original argument in the calling function.
- Usage: Used when you want the function to modify the original value or when you want to avoid the overhead of copying large data structures.
```
#include <iostream>
using namespace std;

void passByReference(int &x) {
    x = 20;  // This change will affect the original variable
}

int main() {
    int a = 10;
    passByReference(a);
    cout << "Value of a after passByReference: " << a << endl;  // Output: 20
    return 0;
}

```

##### Differences Between Pass by Value and Pass by Reference:
| **Feature**            | **Pass by Value**        | **Pass by Reference**       |
|------------------------|--------------------------|-----------------------------|
| **Memory**             | Copy of value is passed   | Reference to original is passed |
| **Changes in Function** | Do not affect original    | Affect the original variable |
| **Use Case**            | When original value should remain unchanged | When modifications to the original are needed |
