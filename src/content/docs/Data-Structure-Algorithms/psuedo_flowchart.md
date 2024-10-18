---
title: Pseudo Code and Flow chart
description: A guide in my new Starlight docs site.
---

Guides lead a user through a specific task they want to accomplish, often with a sequence of steps.
Writing a good guide requires thinking about what your users are trying to do.

## Flow Chart
- Problem Solving Approach
    - Understand Problem
    - Write given values
    - Figure out approach
    - Write Program

Flow chart or Pseudo code is a rough solution of any problem. Later with the help of this we can write solution high lavel language, which will also converted into machine redeable format with compiler.

### Flow chart Symbols
- Terminator - This is used for show start or end of program.
<div class="flowchart-container">
  <!-- Input/Output: Start -->
  <div class="flowchart-shape input-output">
    <p>Start / End</p>
  </div>
</div>

- Input/output - Used to take input from user or give output to use.

  <!-- Input/Output: Input Principal, Rate, Time -->
  <div class="flowchart-container">
  <div class="flowchart-shape parallelogram">
    <p>Input / Output</p>
  </div>
</div>


- Process - Used for calculate output or do process. 
  <!-- Process: Calculate Simple Interest -->
<div class="flowchart-container">
  <div class="flowchart-shape process">
    <p>Process / Calculate</p>
  </div>
  </div>

- Decision making - Used to check condition and make decision based on particular condition. According to condition end or continue program.
<div class="flowchart-container" style="margin: 40px 0px 50px 0px;">
  <!-- Input/Output: Input Principal, Rate, Time -->
 <div class="decision">
    <div>Decision: Valid Input?</div>
  </div> 
</div>
- Arrow - Used to connect Terminator, Input/Output,  process or decision making with each other.
<div class="flowchart-container">
   <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>
  </div>

#### Here is an exmaple to understand flowchart symbols
- Sum of 2 numbers
Here will be image or screenshot for this example.

## Psuedo Code
Pseudo code is a generic way of representing a program or solution of any problem in human readable format. 

#### Here is an exmaple to understand pseudocode
Find Sum of 2 numbers.
- Approach 1
```md
- Read 2 number, a & b
- Sum = a + b
- print sum
``` 
- Approach 2
```md
- Read number a
- Read number b
- let Sum = 0
- Sum = a + b
- print sum
``` 

With the help of both above approach to write pseudo code, it is understood that there is no any fixed pattern to write pseudo code. It's our approach to solve any problem.

## Examples
### find Simple Interest(S.I.)
- Peudo Code
```
- Read Principal, rate and time
- simple interest = (principal * rate) / 100;
- Print simple interest
```
- Flow Chart

<div class="flowchart-container">
  <!-- Input/Output: Start -->
  <div class="flowchart-shape input-output">
    <p>Start</p>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>

  <!-- Input/Output: Input Principal, Rate, Time -->
  <div class="flowchart-shape parallelogram">
    <p>Read: Principal, Rate, Time</p>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>
  <!-- Process: Calculate Simple Interest -->
  <div class="flowchart-shape process">
    <p>SI = (P * R * T) / 100</p>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>

  <!-- Output: Display SI -->
  <div class="flowchart-shape parallelogram">
    <p>Print: SI</p>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>

  <!-- Input/Output: End -->
  <div class="flowchart-shape input-output">
    <p>End</p>
  </div>
</div>

### Average of 3 numbers
- Peudo Code
```
- Read a, b, and c
- average = (a + b + c) / 3;
- Print simple average
```
- Flow Chart

<div class="flowchart-container">
  <!-- Input/Output: Start -->
  <div class="flowchart-shape input-output">
    <p>Start</p>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>

  <!-- Input/Output: Input Principal, Rate, Time -->
  <div class="flowchart-shape parallelogram">
    <p>Read: a, b , c</p>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>
  <!-- Process: Calculate Simple Interest -->
  <div class="flowchart-shape process">
    <p>average = (a + b + c) / 3</p>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>

  <div class="flowchart-shape parallelogram">
    <p>Print: average</p>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>

  <!-- Input/Output: End -->
  <div class="flowchart-shape input-output">
    <p>End</p>
  </div>
</div>

### check a > b or not

- Peudo Code
```
- Read a & b
- if a < b
   print yes
- else 
  print no
```

- Flow Chart

<div class="flowchart-container" style="margin-right: 100px">
  <!-- Input/Output: Input a = 5, b = 7 -->
  <div class="flowchart-shape input-output">
    <p>Start</p>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>

  <!-- Output for Yes (True) -->
  <div class="flowchart-shape parallelogram">
    <p>Read a & b</p>
  </div>
  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>
  <!-- Decision: Is a < b? -->
  <div style="position:relative;">
  <div class="decision">
    <div>is a &lt; b?</div>
  </div>

  <div style="position: absolute; right: -70px; top: 38px;">
  <div class="connector-right">
    <div class="horizontal"></div>
    <div class="arrow-right" style="transform: rotate(-90deg);"></div>
  </div>
  </div>

  <!-- Output for No (False) -->
  <div class="right-output">
  <div class="parallelogram">
    <p>Print: False (a &gt;= b)</p>
  </div>
  </div>

  <!-- Connector -->
  <div style="position: absolute; right: -160px; top: 90px; ">
  <div style="display: relative">
  <div style="height: 20px" class="connector"></div>
  <div style="position: absolute; right: -10px; top: 10px;"  class="arrow"></div>
  </div>
  </div>

  <div style="position: absolute; right: -250px; top: 130px; ">
  <div class="flowchart-shape input-output">
    <p>End</p>
  </div>
  </div>

  <div style="position: absolute; right: -150px; top: 200px; width: 2px; height: 70px; background-color: gray;">
  </div>
    <div style="position: absolute; right: -160px; top: 190px; transform: rotate(180deg);"  class="arrow"></div>
  <div style="position: absolute; right: -150px; top: 268px; width: 125px; height: 2px; background-color: gray;">
  </div>


   </div>

  <!-- Connector for Yes -->
  <div class="connector"></div>
  <div class="arrow"></div>
  <div class="flowchart-shape parallelogram">
    <p>Print: True (a &lt; b)</p>
  </div>
</div>


### check odd or even

- Peudo Code
```
- Read a & b
- if a < b
   print yes
- else 
  print no
```

- Flow Chart

<div class="flowchart-container" style="margin-right: 100px">
  <!-- Input/Output: Input a = 5, b = 7 -->
  <div class="flowchart-shape input-output">
    <p>Start</p>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>

  <!-- Output for Yes (True) -->
  <div class="flowchart-shape parallelogram">
    <p>Read n</p>
  </div>
  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>
  <!-- Decision: Is a < b? -->
  <div style="position:relative;">
  <div class="decision">
    <div>is n % 2 = 0 ?</div>
  </div>

  <div style="position: absolute; right: -70px; top: 38px;">
  <div class="connector-right">
    <div class="horizontal"></div>
    <div class="arrow-right" style="transform: rotate(-90deg);"></div>
  </div>
  </div>

  <!-- Output for No (False) -->
  <div class="right-output">
  <div class="parallelogram">
    <p>Print: Even (if true)</p>
  </div>
  </div>

  <!-- Connector -->
  <div style="position: absolute; right: -160px; top: 90px; ">
  <div style="display: relative">
  <div style="height: 20px" class="connector"></div>
  <div style="position: absolute; right: -10px; top: 10px;"  class="arrow"></div>
  </div>
  </div>

  <div style="position: absolute; right: -250px; top: 130px; ">
  <div class="flowchart-shape input-output">
    <p>End</p>
  </div>
  </div>

  <div style="position: absolute; right: -150px; top: 200px; width: 2px; height: 70px; background-color: gray;">
  </div>
    <div style="position: absolute; right: -160px; top: 190px; transform: rotate(180deg);"  class="arrow"></div>
  <div style="position: absolute; right: -150px; top: 268px; width: 125px; height: 2px; background-color: gray;">
  </div>


   </div>

  <!-- Connector for Yes -->
  <div class="connector"></div>
  <div class="arrow"></div>
  <div class="flowchart-shape parallelogram">
    <p>Print: Odd (if false)</p>
  </div>

</div>

### check given number is positive(+ve), negative(-ve), or zero(0)

- Peudo Code
```
- Read n
- if n > 0
   print positive(+ve)
- else if n < 0
    print negative(-ve)
- else 
  print zero(0)
```

- Flow Chart

<div class="flowchart-container" style="margin-right: 100px">
  <!-- Input/Output: Input a = 5, b = 7 -->
  <div class="flowchart-shape input-output">
    <p>Start</p>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>

  <!-- Output for Yes (True) -->
  <div class="flowchart-shape parallelogram">
    <p>Read n</p>
  </div>
  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>
  <!-- Decision: Is a < b? -->
  <div style="position:relative;">
  <div class="decision">
    <div>is n > 0 ?</div>
  </div>

  <div style="position: absolute; right: -50px; top: 38px;">
  <div class="connector-right">
    <div class="horizontal"></div>
    <div class="arrow-right" style="transform: rotate(-90deg);"></div>
  </div>
  </div>

  <!-- Output for No (False) -->
  <div class="right-output">
  <div class="parallelogram">
    <p>Print: Positive(+ve) (if true)</p>
  </div>
  </div>

  <!-- Connector -->
  <div style="position: absolute; right: -200px; top: 90px; ">
  <div style="display: relative">
  <div style="height: 280px" class="connector"></div>
  <div style="position: absolute; right: -10px; top: 260px;"  class="arrow"></div>
  </div>
  </div>
   </div>

  <div class="connector"></div>
  <div class="arrow"></div>
 <!-- Decision: Is a < b? -->
  <div style="position:relative;">
  <div class="decision">
    <div>is n <> 0 ?</div>
  </div>

  <div style="position: absolute; right: -70px; top: 38px;">
  <div class="connector-right">
    <div class="horizontal"></div>
    <div class="arrow-right" style="transform: rotate(-90deg);"></div>
  </div>
  </div>

  <!-- Output for No (False) -->
  <div class="right-output">
  <div class="parallelogram">
    <p>Print: Negative (if true)</p>
  </div>
  </div>

  <!-- Connector -->
  <div style="position: absolute; right: -160px; top: 90px; ">
  <div style="display: relative">
  <div style="height: 20px" class="connector"></div>
  <div style="position: absolute; right: -10px; top: 10px;"  class="arrow"></div>
  </div>
  </div>

  <div style="position: absolute; right: -250px; top: 130px; ">
  <div class="flowchart-shape input-output">
    <p>End</p>
  </div>
  </div>

  <div style="position: absolute; right: -150px; top: 200px; width: 2px; height: 70px; background-color: gray;">
  </div>
    <div style="position: absolute; right: -160px; top: 190px; transform: rotate(180deg);"  class="arrow"></div>
  <div style="position: absolute; right: -150px; top: 268px; width: 125px; height: 2px; background-color: gray;">
  </div>
   </div>

  <!-- Connector for Yes -->
  <div class="connector"></div>
  <div class="arrow"></div>
  <div class="flowchart-shape parallelogram">
    <p>Print: Zero(0) (if false)</p>
  </div>
</div>



### Print number 1 to n
- Peudo Code
```
- Read n
- let number = 1
- Repeat below process untill condition true for every number
- if number <= 5
   print number
   number = number + 1
- else 
  print end
```

- Flow Chart

<div class="flowchart-container" style="margin-right: 100px">
  <!-- Input/Output: Input a = 5, b = 7 -->
  <div class="flowchart-shape input-output">
    <p>Start</p>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>

  <!-- Output for Yes (True) -->
  <div class="flowchart-shape parallelogram">
    <p>Read n</p>
  </div>
  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>

  <div class="flowchart-container">
  <div class="flowchart-shape process">
    <p>Let number = 5</p>
  </div>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>
  <!-- Decision: Is a < b? -->
  <div style="position:relative;">
  <div class="decision">
    <div>is number <= n ?</div>
  </div>
  <div style="position: absolute; right: -50px; top: 38px;">
  <div class="connector-right">
    <div class="horizontal" style="width: 50px;"></div>
    <div class="arrow-right" style="transform: rotate(-90deg);"></div>
  </div>
  </div>

  <!-- Output for No (False) -->
  <div class="right-output">
 <div class="flowchart-shape input-output">
    <p>End (if true)</p>
  </div>
  </div>
  <!-- Connector for Yes -->
 <!-- Decision: Is a < b? -->
  <div style="position:relative;">
  <div style="position: absolute; right: 302px; top: -92px; width: 2px; height: 310px; background-color: gray;">
  </div>
    <div style="position: absolute; right: 235px; top: -112px; transform: rotate(30deg);"  class="arrow"></div>
  <div style="position: absolute; right: 200px; top: 200px; width: 103px; height: 2px; background-color: gray;">
  </div>
  <div style="position: absolute; right: 253px; top: -108px; width: 50px; height: 2px; background-color: gray;">
  </div>
   </div>

  <div style="position: relative; height: 50px;">
  <div class="connector" style="position: absolute; right: 123px; top: 10px;"></div>
  <div class="arrow" style="position: absolute; right: 114px; top: 30px;"></div>
  </div>
  <div class="flowchart-shape parallelogram">
    <p>Print: number</p>
  </div>
  <div style="position: relative; height: 30px;">
  <div class="connector" style="position: absolute; right: 110px; top: -15px;"></div>
  <div class="arrow" style="position: absolute; right: 100px; top: 10px;"></div>
  </div>
    <div class="flowchart-container">
  <div class="flowchart-shape process">
    <p>number = number + 1</p>
  </div>
  </div>
</div>
</div>

### Print even number between 1 to n
- Peudo Code
```
- Read n
- let number = 2
- Repeat below process untill condition true for every number
- if number < n
   print number
   number = number + 2
- else 
  print end
```

- Flow Chart

<div class="flowchart-container" style="margin-right: 100px">
  <!-- Input/Output: Input a = 5, b = 7 -->
  <div class="flowchart-shape input-output">
    <p>Start</p>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>

  <!-- Output for Yes (True) -->
  <div class="flowchart-shape parallelogram">
    <p>Read n</p>
  </div>
  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>

  <div class="flowchart-container">
  <div class="flowchart-shape process">
    <p>Let number = 2</p>
  </div>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>
  <!-- Decision: Is a < b? -->
  <div style="position:relative;">
  <div class="decision">
    <div>is number < n ?</div>
  </div>
  <div style="position: absolute; right: -50px; top: 38px;">
  <div class="connector-right">
    <div class="horizontal" style="width: 50px;"></div>
    <div class="arrow-right" style="transform: rotate(-90deg);"></div>
  </div>
  </div>

  <!-- Output for No (False) -->
  <div class="right-output">
 <div class="flowchart-shape input-output">
    <p>End (if false)</p>
  </div>
  </div>
  <!-- Connector for Yes -->
 <!-- Decision: Is a < b? -->
  <div style="position:relative;">
  <div style="position: absolute; right: 302px; top: -92px; width: 2px; height: 310px; background-color: gray;">
  </div>
    <div style="position: absolute; right: 235px; top: -112px; transform: rotate(30deg);"  class="arrow"></div>
  <div style="position: absolute; right: 200px; top: 200px; width: 103px; height: 2px; background-color: gray;">
  </div>
  <div style="position: absolute; right: 253px; top: -108px; width: 50px; height: 2px; background-color: gray;">
  </div>
   </div>

  <div style="position: relative; height: 50px;">
  <div class="connector" style="position: absolute; right: 123px; top: 10px;"></div>
  <div class="arrow" style="position: absolute; right: 114px; top: 30px;"></div>
  </div>
  <div class="flowchart-shape parallelogram">
    <p>Print: number</p>
  </div>
  <div style="position: relative; height: 30px;">
  <div class="connector" style="position: absolute; right: 110px; top: -15px;"></div>
  <div class="arrow" style="position: absolute; right: 100px; top: 10px;"></div>
  </div>
    <div class="flowchart-container">
  <div class="flowchart-shape process">
    <p>number = number + 2</p>
  </div>
  </div>
</div>
</div>

### Print odd number between 1 to n
- Peudo Code
```
- Read n
- let number = 1
- Repeat below process untill condition true for every number
- if number < n
   print number
   number = number + 2
- else 
  print end
```

- Flow Chart

<div class="flowchart-container" style="margin-right: 100px">
  <!-- Input/Output: Input a = 5, b = 7 -->
  <div class="flowchart-shape input-output">
    <p>Start</p>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>

  <!-- Output for Yes (True) -->
  <div class="flowchart-shape parallelogram">
    <p>Read n</p>
  </div>
  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>

  <div class="flowchart-container">
  <div class="flowchart-shape process">
    <p>Let number = 1</p>
  </div>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>
  <!-- Decision: Is a < b? -->
  <div style="position:relative;">
  <div class="decision">
    <div>is number < n ?</div>
  </div>
  <div style="position: absolute; right: -50px; top: 38px;">
  <div class="connector-right">
    <div class="horizontal" style="width: 50px;"></div>
    <div class="arrow-right" style="transform: rotate(-90deg);"></div>
  </div>
  </div>

  <!-- Output for No (False) -->
  <div class="right-output">
 <div class="flowchart-shape input-output">
    <p>End (if false)</p>
  </div>
  </div>
  <!-- Connector for Yes -->
 <!-- Decision: Is a < b? -->
  <div style="position:relative;">
  <div style="position: absolute; right: 302px; top: -92px; width: 2px; height: 310px; background-color: gray;">
  </div>
    <div style="position: absolute; right: 235px; top: -112px; transform: rotate(30deg);"  class="arrow"></div>
  <div style="position: absolute; right: 200px; top: 200px; width: 103px; height: 2px; background-color: gray;">
  </div>
  <div style="position: absolute; right: 253px; top: -108px; width: 50px; height: 2px; background-color: gray;">
  </div>
   </div>

  <div style="position: relative; height: 50px;">
  <div class="connector" style="position: absolute; right: 123px; top: 10px;"></div>
  <div class="arrow" style="position: absolute; right: 114px; top: 30px;"></div>
  </div>
  <div class="flowchart-shape parallelogram">
    <p>Print: number</p>
  </div>
  <div style="position: relative; height: 30px;">
  <div class="connector" style="position: absolute; right: 110px; top: -15px;"></div>
  <div class="arrow" style="position: absolute; right: 100px; top: 10px;"></div>
  </div>
    <div class="flowchart-container">
  <div class="flowchart-shape process">
    <p>number = number + 2</p>
  </div>
  </div>
</div>
</div>

### Find sum 1 to n(inclusive)
- Peudo Code
```
- Read n
- let sum = 0, number = 1
- Repeat below process untill condition true for every number
- if number < n
   sum = sum + number
   number = number + 1
- else 
  print sum
```

- Flow Chart

<div class="flowchart-container" style="margin-right: 100px">
  <!-- Input/Output: Input a = 5, b = 7 -->
  <div class="flowchart-shape input-output">
    <p>Start</p>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>

  <!-- Output for Yes (True) -->
  <div class="flowchart-shape parallelogram">
    <p>Read n</p>
  </div>
  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>

  <div class="flowchart-container">
  <div class="flowchart-shape process">
    <p>Let sum = 0, number = 1</p>
  </div>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>
  <!-- Decision: Is a < b? -->
  <div style="position:relative;">
  <div class="decision">
    <div>is number < n ?</div>
  </div>
  <div style="position: absolute; right: -50px; top: 38px;">
  <div class="connector-right">
    <div class="horizontal" style="width: 50px;"></div>
    <div class="arrow-right" style="transform: rotate(-90deg);"></div>
  </div>
  </div>

<!-- Output for No (False) -->
  <div class="right-output" style="right: -200px;">
  <div class="parallelogram" style="width: 150px;">
    <p>Print: Sum</p>
  </div>
  </div>

  <!-- Connector -->
  <div style="position: absolute; right: -160px; top: 90px; ">
  <div style="display: relative">
  <div style="height: 20px" class="connector"></div>
  <div style="position: absolute; right: -10px; top: 10px;"  class="arrow"></div>
  </div>
  </div>

  <div style="position: absolute; right: -250px; top: 130px; ">
  <div class="flowchart-shape input-output">
    <p>End</p>
  </div>
  </div>
  <!-- Connector for Yes -->
 <!-- Decision: Is a < b? -->
  <div style="position:relative;">
  <div style="position: absolute; right: 302px; top: -92px; width: 2px; height: 310px; background-color: gray;">
  </div>
    <div style="position: absolute; right: 235px; top: -112px; transform: rotate(30deg);"  class="arrow"></div>
  <div style="position: absolute; right: 200px; top: 200px; width: 103px; height: 2px; background-color: gray;">
  </div>
  <div style="position: absolute; right: 253px; top: -108px; width: 50px; height: 2px; background-color: gray;">
  </div>
   </div>

  <div style="position: relative; height: 50px;">
  <div class="connector" style="position: absolute; right: 123px; top: 10px;"></div>
  <div class="arrow" style="position: absolute; right: 114px; top: 30px;"></div>
  </div>
  <div class="flowchart-shape parallelogram">
    <p>sum = sum + number</p>
  </div>
  <div style="position: relative; height: 30px;">
  <div class="connector" style="position: absolute; right: 110px; top: -15px;"></div>
  <div class="arrow" style="position: absolute; right: 100px; top: 10px;"></div>
  </div>
    <div class="flowchart-container">
  <div class="flowchart-shape process">
    <p>number = number + 1</p>
  </div>
  </div>
</div>
</div>


### Find factorial from 1 to n
- Peudo Code
```
- Read n
- let factorial = 1, number = 1
- Repeat below process untill condition true for every number
- if number < n
   factorial = factorial * number
   number = number + 1
- else 
  print factorial
```

- Flow Chart

<div class="flowchart-container" style="margin-right: 100px">
  <!-- Input/Output: Input a = 5, b = 7 -->
  <div class="flowchart-shape input-output">
    <p>Start</p>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>

  <!-- Output for Yes (True) -->
  <div class="flowchart-shape parallelogram">
    <p>Read n</p>
  </div>
  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>

  <div class="flowchart-container">
  <div class="flowchart-shape process">
    <p>Let factorial = 1, number = 1</p>
  </div>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>
  <!-- Decision: Is a < b? -->
  <div style="position:relative;">
  <div class="decision">
    <div>is number <= n ?</div>
  </div>
  <div style="position: absolute; right: -50px; top: 38px;">
  <div class="connector-right">
    <div class="horizontal" style="width: 50px;"></div>
    <div class="arrow-right" style="transform: rotate(-90deg);"></div>
  </div>
  </div>

<!-- Output for No (False) -->
  <div class="right-output" style="right: -240px;">
  <div class="parallelogram">
    <p>Print: Factorial (if false)</p>
  </div>
  </div>

  <!-- Connector -->
  <div style="position: absolute; right: -160px; top: 90px; ">
  <div style="display: relative">
  <div style="height: 20px" class="connector"></div>
  <div style="position: absolute; right: -10px; top: 10px;"  class="arrow"></div>
  </div>
  </div>

  <div style="position: absolute; right: -250px; top: 130px; ">
  <div class="flowchart-shape input-output">
    <p>End</p>
  </div>
  </div>
  <!-- Connector for Yes -->
 <!-- Decision: Is a < b? -->
  <div style="position:relative;">
  <div style="position: absolute; right: 302px; top: -92px; width: 2px; height: 310px; background-color: gray;">
  </div>
    <div style="position: absolute; right: 235px; top: -112px; transform: rotate(30deg);"  class="arrow"></div>
  <div style="position: absolute; right: 200px; top: 200px; width: 103px; height: 2px; background-color: gray;">
  </div>
  <div style="position: absolute; right: 253px; top: -108px; width: 50px; height: 2px; background-color: gray;">
  </div>
   </div>

  <div style="position: relative; height: 50px;">
  <div class="connector" style="position: absolute; right: 123px; top: 10px;"></div>
  <div class="arrow" style="position: absolute; right: 114px; top: 30px;"></div>
  </div>
  <div class="flowchart-shape parallelogram">
    <p>factorial =factorial * number</p>
  </div>
  <div style="position: relative; height: 30px;">
  <div class="connector" style="position: absolute; right: 110px; top: -15px;"></div>
  <div class="arrow" style="position: absolute; right: 100px; top: 10px;"></div>
  </div>
    <div class="flowchart-container">
  <div class="flowchart-shape process">
    <p>number = number * 1</p>
  </div>
  </div>
</div>
</div>




### check given number n is prime or not?

- Peudo Code
```
- Read n
- let number = 2
- Repeat below process untill condition true for every number
- if number < n
    if n % number = 0
      print no
      end
    else 
      num = num + 1
- else 
  print prime
  end
```

- Flow Chart

<div class="flowchart-container" style="margin-right: 100px">
  <!-- Input/Output: Input a = 5, b = 7 -->
  <div class="flowchart-shape input-output">
    <p>Start</p>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>

  <!-- Output for Yes (True) -->
  <div class="flowchart-shape parallelogram">
    <p>Read n</p>
  </div>

  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>

  <div class="flowchart-container">
  <div class="flowchart-shape process">
    <p>Let number = 2</p>
  </div>
  </div>
  <!-- Connector -->
  <div class="connector"></div>
  <div class="arrow"></div>
  <!-- Decision: Is a < b? -->
  <div style="position:relative;">
  <div class="decision">
    <div>is number > n ?</div>
  </div>

  <div style="position: absolute; right: -90px; top: 38px;">
  <div class="connector-right">
    <div class="horizontal" style="width: 50px;"></div>
    <div class="arrow-right" style="transform: rotate(-90deg);"></div>
  </div>
  </div>

  <!-- Output for No (False) -->
  <div class="right-output">
  <div class="parallelogram">
    <p>Print: Prime (if false)</p>
  </div>
  </div>

  <!-- Connector -->
  <div style="position: absolute; right: -150px; top: 90px; ">
  <div style="display: relative">
  <div style="height: 70px" class="connector"></div>
  <div style="position: absolute; right: -10px; top: 50px;"  class="arrow"></div>
  </div>
  </div>
   </div>

  <div class="connector"></div>
  <div class="arrow"></div>
 <!-- Decision: Is a < b? -->
  <div style="position:relative;">
  <div class="decision">
    <div>is n % number = 0 ?</div>
  </div>

  <div style="position: absolute; right: -100px; top: 38px;">
  <div class="connector-right">
     <div class="horizontal" style="width: 50px;"></div>
    <div class="arrow-right" style="transform: rotate(-90deg);"></div>
  </div>
  </div>

  <!-- Output for No (False) -->
  <div class="right-output">
  <div class="parallelogram">
    <p>Print: No (if true)</p>
  </div>
  </div>

  <!-- Connector -->
  <div style="position: absolute; right: -160px; top: 0px; ">
  <div style="display: relative">
  <div style="height: 40px" class="connector"></div>
  <div style="position: absolute; right: -10px; top: -20px; transform: rotate(180deg);"  class="arrow"></div>
  </div>
  </div>

  <div style="position: absolute; right: -250px; top: -80px; ">
  <div class="flowchart-shape input-output">
    <p>End</p>
  </div>
  </div>

 <div style="position:relative;">
  <div style="position: absolute; right: 302px; top: -330px; width: 2px; height: 468px; background-color: gray;">
  </div>
    <div style="position: absolute; right: 200px; top: -350px; transform: rotate(30deg);"  class="arrow"></div>
  <div style="position: absolute; right: 175px; top: 120px; width: 130px; height: 2px; background-color: gray;">
  </div>
  <div style="position: absolute; right: 200px; top: -346px; width: 105px; height: 2px; background-color: gray;">
  </div>
   </div>
   </div>

  <!-- Connector for Yes -->
  <div class="connector"></div>
  <div class="arrow"></div>
  <div class="flowchart-container">
  <div class="flowchart-shape process">
    <p>number = number + 1</p>
  </div>
  </div>
</div>










