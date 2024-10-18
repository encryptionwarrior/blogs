---
title: Space Time Complexity
description: A guide in my new Starlight docs site.
---

## 1. Time Complexity
- **Definition**: Time complexity measures the **amount of time** an algorithm takes to run as a function of the **input size (n)**.
- **Objective**: To evaluate how efficiently an algorithm performs as the input grows.

### Common Time Complexities

| **Time Complexity**  | **Example**                     | **Explanation**                               |
|----------------------|----------------------------------|-----------------------------------------------|
| **O(1)**             | Accessing an array element       | Constant time, independent of input size.     |
| **O(n)**             | Linear search                    | Time grows linearly with input size.          |
| **O(log n)**         | Binary search                    | Time grows logarithmically, halves input size each step. |
| **O(n²)**            | Bubble sort, Insertion sort      | Time grows quadratically, often in nested loops. |
| **O(2ⁿ)**            | Recursive algorithms (e.g., Fibonacci) | Time doubles with each additional input size. |

---

## 2. Space Complexity
- **Definition**: Space complexity measures the **amount of memory** an algorithm needs as a function of the **input size (n)**.
- **Objective**: To determine how much memory is required for the execution of the algorithm.

### Types of Space Usage:
1. **Auxiliary Space**: Extra memory required by the algorithm (excluding input data).
2. **Total Space**: Includes the input data space and auxiliary space.

### Common Space Complexities

| **Space Complexity**  | **Example**                     | **Explanation**                               |
|-----------------------|----------------------------------|-----------------------------------------------|
| **O(1)**              | Swapping variables               | Constant space, no additional memory used.    |
| **O(n)**              | Storing elements in an array     | Memory grows linearly with input size.        |
| **O(n²)**             | 2D arrays (e.g., matrices)       | Memory grows quadratically.                   |

---

## 3. Big-O Notation
- **Definition**: Describes the **upper bound** of an algorithm's time or space complexity. It represents the **worst-case scenario**.
- **Purpose**: Provides a way to compare the efficiency of different algorithms as input size increases.

**Examples**:
- **O(1)**: Constant time, no matter the size of input.
- **O(n)**: Linear time, grows proportionally with input size.
- **O(n²)**: Quadratic time, usually from nested loops.

---

## 4. Time Complexity of Common Operations

| **Operation**          | **Time Complexity**   | **Explanation**                               |
|------------------------|-----------------------|-----------------------------------------------|
| **Accessing array element** | O(1)              | Direct access to any element by index.        |
| **Linear search**       | O(n)                 | Checks each element one by one.               |
| **Binary search**       | O(log n)             | Divides the problem in half at each step.     |
| **Sorting (Merge/Quick)** | O(n log n)         | Efficient sorting algorithms.                 |
| **Brute force substring search** | O(n * m)    | Searching in two nested loops.                |

---

## 5. Time Complexity of Loops

1.  Single loop:
```c++
for(int i = 0; i < n; i++) {
    // O(1) operation
}
```

- Time complexity: O(n) (linear)
```c++
for(int i = 0; i < n; i++) {
    for(int j = 0; j < n; j++) {
        // O(1) operation
    }
}
```
- Time complexity: O(n²) (quadratic)

## 6.Example of Time Complexity:
- Linear Search:
```c++
int linearSearch(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) {
            return i;  // Element found
        }
    }
    return -1;  // Element not found
}
```

- Time Complexity: O(n) (as it iterates through all elements in the worst case).
```c++
int binarySearch(int arr[], int n, int key) {
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == key)
            return mid;
        else if (arr[mid] < key)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1;  // Element not found
}
```

- Time Complexity: O(log n) (as it halves the search space each time).
