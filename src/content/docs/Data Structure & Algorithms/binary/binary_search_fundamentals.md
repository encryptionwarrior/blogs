---
title: Binary Search Fundamentals
description: A guide in my new Starlight docs site.
---

1. Definition:
- Binary Search is an efficient algorithm to find an element in a sorted array by repeatedly dividing the search interval in half.
- It operates on the divide-and-conquer principle and reduces the time complexity compared to linear search.

2. Time Complexity:
- Best Case: O(1) — If the middle element is the target.
- Average/Worst Case: O(log n) — At each step, the size of the search space is halved, making the search logarithmic in terms of input size.

3. Key Concept:
    - The array must be sorted for binary search to work.
    - Steps:
        - Find the middle element.
        - If the middle element equals the target, return the index.
        - If the middle element is greater than the target, repeat the search on the left half.
        - If the middle element is less than the target, repeat the search on the right half.
        - Continue until the element is found or the search space is exhausted.

4. Binary Search Algorithm:
- Iterative Approach:
```c++
int binarySearch(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;  // Calculate middle index
        
        if (arr[mid] == target)  // Check if the middle element is the target
            return mid;
        else if (arr[mid] < target)  // Target is in the right half
            left = mid + 1;
        else  // Target is in the left half
            right = mid - 1;
    }
    return -1;  // Target not found
}
```
- Recursive Approach
```c++
int binarySearchRecursive(int arr[], int left, int right, int target) {
    if (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target)  // Check if the middle element is the target
            return mid;
        else if (arr[mid] > target)  // Search in the left half
            return binarySearchRecursive(arr, left, mid - 1, target);
        else  // Search in the right half
            return binarySearchRecursive(arr, mid + 1, right, target);
    }
    return -1;  // Target not found
}
```

5. Example:
- Suppose we have a sorted array:
```c++
int arr[] = {2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91};
int n = sizeof(arr) / sizeof(arr[0]);
int target = 23;
```

- Using the Iterative Binary Search:
```c++
int result = binarySearch(arr, n, target);
if (result != -1)
    cout << "Element found at index: " << result;
else
    cout << "Element not found";
```

6. Advantages:
- Efficient: Works well for large datasets, reducing the number of comparisons drastically compared to linear search.
- Logarithmic Time: Time complexity is O(log n), which is much faster than O(n) for larger arrays.
7. Disadvantages:
- Only for Sorted Arrays: The array must be sorted beforehand.
- Requires Random Access: Binary search works best with arrays or structures that allow random access.

### Find index in Odd and Even Arrays
```c++
int binarySearch(int arr[], int size, int key) {
    int start = 0;
    int end = size-1;
    int mid = start + (end-start)/2;
    while(start <= end) {
        if(arr[mid] == key) {
            return mid;
        }
        //go to right wala part
        if(key > arr[mid]) {
            start = mid + 1;
        }
        else{ //key < arr[mid]
            end = mid - 1;
        }
        mid = start + (end-start)/2;
    }
    return -1;
}

int main() { 
    int even[6] = {2,4,6,8,12,18};
    int odd[5] = {3, 8, 11, 14, 16};
    int evenIndex = binarySearch(even, 6, 6);
    cout << " Index of 6 is " << evenIndex << endl;
    int oddIndex = binarySearch(odd, 5, 14);
    cout << " Index of 14 is " << oddIndex << endl;
    return 0;
}
```