---
title: Array Basics
description: A guide in my new Starlight docs site.
---

#### Definition:
- An array is a collection of elements of the same data type stored in contiguous memory locations.
- Arrays have a fixed size and allow random access to elements using an index.

##### Syntax:
```c++
data_type array_name[size];
```
- data_type: The type of data (e.g., int, float).
- array_name: Name of the array.
- size: The number of elements the array can hold.
##### Array Initialization:
- At Declaration:
```c++
int arr[5] = {10, 20, 30, 40, 50};  // Initialize with values
```
-  Default Initialization:
```c++
int arr[5] = {};  // Initializes all elements to 0
```
- Access Elements:
```c++
cout << arr[0];  // Output: 10
cout << arr[4];  // Output: 50
```
#####  Looping Through an Array:
You can use a loop (like for) to iterate over an array:
```c++
int arr[5] = {10, 20, 30, 40, 50};
for(int i = 0; i < 5; i++) {
    cout << arr[i] << " ";  // Output: 10 20 30 40 50
}
```

#####  Array Size:
The size of the array is defined when declared and cannot be changed dynamically.
```c++
int arr[5];  // Fixed-size array
```
#####  Multidimensional Arrays:
Arrays can have more than one dimension, such as 2D arrays.
- Syntax
```js
data_type array_name[rows][columns];
```
- Example
```c++
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
cout << matrix[1][2];  // Output: 6
```
#####  Array Methods (Common Operations):
- Finding the Length of the Array:
```c++
int arr[5] = {10, 20, 30, 40, 50};
int size = sizeof(arr) / sizeof(arr[0]);  // Output: 5
```
- Sorting the Array:
```c++
#include <algorithm>
int arr[5] = {30, 10, 50, 20, 40};
sort(arr, arr + 5);  // Sorts the array in ascending order
```
- Searching for an Element:
```c++
int arr[5] = {10, 20, 30, 40, 50};
int key = 30;
bool found = false;

for(int i = 0; i < 5; i++) {
    if(arr[i] == key) {
        found = true;
        break;
    }
}

if(found)
    cout << "Element found!" << endl;
else
    cout << "Element not found!" << endl;
```

- Reversing an Array:
```c++
#include <algorithm>
int arr[5] = {10, 20, 30, 40, 50};
reverse(arr, arr + 5);  // Reverses the array
```

- Sum of Elements:
```c++
int arr[5] = {10, 20, 30, 40, 50};
int sum = 0;

for(int i = 0; i < 5; i++) {
    sum += arr[i];  // Adding each element to sum
}

cout << "Sum is: " << sum;  // Output: 150
```

##### Example code
```c++
#include<iostream>
using namespace std;

// HOLD
void printArray(int arr[], int size) {

    cout<< " printing the array " << endl;
    //print the array
    for(int i =0; i<size; i++) {
        cout << arr[i] << " ";
    }
    cout<< " printing DONE " << endl;
}

int main() {

    //declare
    int number[15];

    //accessing an array
    cout << "Value at 14 index " << number[14] << endl;

    //cout << "Value at 20 index " << number[20] << endl;

    //initialising an array 
    int second[3] = {5, 7, 11};

    //accesing an element
    cout << "Value at 2 index " << second[2] << endl;

    int third[15] = {2,7};

    int n = 15;
    //printArray(third, 15);
    int thirdSize = sizeof(third)/sizeof(int);
    cout<<" Size of Third is " << thirdSize <<endl;

    //initialising all locations with 0
    int fourth[10] = {0};

    n = 10;
    //printArray(fourth, 10);

    //initialising all locations with 1 [not possible with below line]
    int fifth[10] = {1};

    n = 10;
    //printArray(fifth, 10);

    int fifthSize = sizeof(fifth)/sizeof(int);
    cout<<" Size of Fifth is " << fifthSize <<endl;
    

    char ch[5] = {'a', 'b', 'c', 'r', 'p'}; 
    cout << ch[3] << endl;

    cout<< " printing the array " << endl;
    //print the array
    for(int i =0; i<5; i++) {
        cout << ch[i] << " ";
    }
    cout<< " printing DONE " << endl;
    double firstDouble[5];
    float firstFloat[6];
    bool firstBool[9];


    cout << endl << " Everything is Fine " << endl << endl;

    return 0;
}
```
