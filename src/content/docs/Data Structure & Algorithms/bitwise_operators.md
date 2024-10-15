---
title: Bitwise Operators
description: A guide in my new Starlight docs site.
---

### AND - & (Bitwise AND)
- Operation: Performs the AND operation on each pair of corresponding bits of two numbers. The result is 1 only if both bits are 1; otherwise, it results in 0.
- Truth Table:
```c++
0 & 0 = 0
0 & 1 = 0
1 & 0 = 0
1 & 1 = 1
```
Example
```c++
int a = 5;   // Binary: 0101
int b = 3;   // Binary: 0011
int result = a & b;  // Performs bitwise AND: 0101 & 0011 = 0001 (Decimal: 1)
cout << "a & b = " << result << endl;
```
###  OR - | (Bitwise OR)
- Operation: Performs the OR operation on each pair of corresponding bits. The result is 1 if at least one of the bits is 1; otherwise, it results in 0.
- Truth Table:
```c++
0 | 0 = 0
0 | 1 = 1
1 | 0 = 1
1 | 1 = 1
```
Example
```c++
int a = 5;   // Binary: 0101
int b = 3;   // Binary: 0011
int result = a | b;  // Performs bitwise OR: 0101 | 0011 = 0111 (Decimal: 7)
cout << "a | b = " << result << endl;
```
###  NOT - ~ (Bitwise NOT)
- Operation: Inverts the bits of the number. The bitwise NOT flips each bit: 0 becomes 1 and 1 becomes 0. It works on a single operand (unary operator).
- Truth Table:
```c++
~0 = 1
~1 = 0
```
Example
```c++
int a = 5;     // Binary: 0101
int result = ~a;  // Performs bitwise NOT: ~0101 = 1010 (Decimal: -6 in two's complement)
cout << "~a = " << result << endl;
```
###  XOR - ^ (Bitwise XOR)
- Operation: Performs the XOR operation on each pair of corresponding bits. The result is 1 if the bits are different, and 0 if they are the same
- Truth Table:
```c++
0 ^ 0 = 0
0 ^ 1 = 1
1 ^ 0 = 1
1 ^ 1 = 0
```
Example
```c++
int a = 5;   // Binary: 0101
int b = 3;   // Binary: 0011
int result = a ^ b;  // Performs bitwise XOR: 0101 ^ 0011 = 0110 (Decimal: 6)
cout << "a ^ b = " << result << endl;
```
###  Left Shift Operator (<<)
- Operation: The left shift operator shifts the bits of a number to the left by a specified number of positions. Each shift to the left effectively multiplies the number by 2 for each position shifted.
- Syntax:
```c++
value << num_of_positions;
```
Example
```c++
int a = 5;  // Binary: 0101
int result = a << 1;  // Shifts bits of 5 (0101) one position left: 1010 (binary for 10)
cout << "a << 1 = " << result << endl;
```
###  Right Shift Operator (>>)
- Operation: The right shift operator shifts the bits of a number to the right by a specified number of positions. Each shift to the right divides the number by 2 for each position shifted.
- Syntax:
```c++
value >> num_of_positions;
```
Example
```c++
int a = 10;  // Binary: 1010
int result = a >> 1;  // Shifts bits of 10 (1010) one position right: 0101 (binary for 5)
cout << "a >> 1 = " << result << endl;
```
###   Converting Decimal to Binary
To convert a decimal number to binary, repeatedly divide the number by 2 and record the remainders. Then, read the remainders in reverse order (bottom to top).

Steps:

1. Divide the number by 2.
2. Record the remainder (0 or 1).
3. Continue dividing the quotient by 2 until the quotient is 0.
4. The binary representation is the remainders read in reverse order.

Example: Convert 13 (decimal) to binary:
```c++
13 ÷ 2 = 6, remainder = 1
 6 ÷ 2 = 3, remainder = 0
 3 ÷ 2 = 1, remainder = 1
 1 ÷ 2 = 0, remainder = 1

Read remainders bottom to top: 1101
```
### Converting Binary to Decimal
To convert a binary number to decimal, multiply each bit by 2 raised to the power of its position (starting from 0 from the rightmost bit) and then sum all the results.

Steps:
1. Start from the rightmost bit, which is position 0.
2. Multiply each bit by 2 position.
3. Sum the results to get the decimal value.

Example: Convert 1101 (binary) to decimal:
```c++
1 × 2³ = 8
1 × 2² = 4
0 × 2¹ = 0
1 × 2⁰ = 1

Sum = 8 + 4 + 0 + 1 = 13
```
### Two's Complement and Negative Numbers in Binary
#### Two's Complement Representation:
- Two's complement is a method for representing negative numbers in binary.
- Most Significant Bit (MSB):
    - 0 = positive number.
    - 1 = negative number.
- The two's complement is found by:
    - Flip all bits (one’s complement).
    - Add 1 to the result.

##### Converting Negative Decimal to Binary (Two's Complement)
Steps:

1. Convert the positive value of the number to binary.
2. Pad the binary to the desired bit length (commonly 8, 16, 32 bits).
3. Flip all bits (one’s complement).
4. Add 1 (two’s complement).

Example: Convert -13 (decimal) to 8-bit binary:

1. Positive 13 in binary: 00001101 (8-bit).
2. Flip all bits: 11110010 (one's complement).
3. Add 1: 11110011 (two's complement).

Result: -13 (decimal) = 11110011 (binary).

##### Converting Binary (Two's Complement) to Negative Decimal
Steps:

1. Check the MSB:
    - If 1, it’s a negative number.
2. Flip all bits (one’s complement).
3. Add 1 to get the absolute value.
4. Add the negative sign.

Example: Convert 11110011 (8-bit binary) to decimal:

1. MSB is 1, so it's negative.
2. Flip all bits: 00001100.
3. Add 1: 00001101 = 13 (decimal).

Result: -13 (decimal).
