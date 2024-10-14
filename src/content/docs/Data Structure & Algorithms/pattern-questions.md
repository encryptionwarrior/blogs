---
title: Pattern Questions
description: A guide in my new Starlight docs site.
---

### Print Below squre pattern
```
****
****
****
****
```
code
```
 int side, i, j;
    cout << endl;
    cout << "Enter side of the square:";
    cout << endl;
    cin >> side;
    cout << endl;

    for (i = 1; i <= side; i++)
    {
        for (j = 1; j <= side; j++)
        {
            cout << "* ";
        }
        cout << endl;
    }
    cout << endl;
```

### Print Number squre pattern
```
1 1 1 1
2 2 2 2
3 3 3 3
4 4 4 4
```
code
```
  int side, i, j;
    cout << endl;
    cout << "Enter side of the square:";
    cout << endl;
    cin >> side;
    cout << endl;

    for (i = 1; i <= side; i++)
    {
        for (j = 1; j <= side; j++)
        {
            cout << i << "  ";
        }
        cout << endl;
    }
    cout << endl;
```

### Print Number squre pattern - 2
```
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4
```
code
```
 int side, i, j;
    cout << endl;
    cout << "Enter side of the square:";
    cout << endl;
    cin >> side;
    cout << endl;

    for (i = 1; i <= side; i++)
    {
        for (j = 1; j <= side; j++)
        {
            cout << j << "  ";
        }
        cout << endl;
    }
    cout << endl;
```

### Print Inverted Number squre pattern 
```
4 3 2 1
4 3 2 1
4 3 2 1
4 3 2 1
```
code
```
int side, i, j;
    cout << endl;
    cout << "Enter side of the square:";
    cout << endl;
    cin >> side;
    cout << endl;

    for (i = 1; i <= side; i++)
    {
        for (j = 1; j <= side; j++)
        {
            cout << (side - j + 1) << "  ";
        }
        cout << endl;
    }
    cout << endl;
```
### Print Counting squre pattern 
```
4 3 2 1
4 3 2 1
4 3 2 1
4 3 2 1
```
code
```
  int side, i, j, counter = 1;
    cout << endl;
    cout << "Enter side of the square:";
    cout << endl;
    cin >> side;
    cout << endl;

    for (i = 1; i <= side; i++)
    {
        for (j = 1; j <= side; j++)
        {
            cout << counter << "  ";
            counter++;
        }
        cout << endl;
    }
    cout << endl;
```

### Print Right Angled Triangle Pattern 
```
*
* * 
* * *
* * * *
```
code
```
   int height, i, j;
    char ch;
    cout << endl;
    cout << "Enter height of the triangle:";
    cout << endl;
    cin >> height;
    cout << endl;
    cout << "Enter the symbol of which you want to create the triangle also:- ";
    cout << endl;
    cin >> ch;
    cout << endl;

    for (i = 1; i <= height; i++)
    {
        for (j = 1; j <= i; j++)
        {
            cout << ch << "  ";
        }
        cout << endl;
    }
    cout << endl;
```
### Right Angled Counting Triangle Pattern
```
1
2 3 
4 5 6
7 8 9 10
```
code
```
    int height, i, j, k, counting = 1;
    char ch;
    cout << endl;
    cout << "Enter height of the triangle:";
    cout << endl;
    cin >> height;
    cout << endl;
    cout << "Enter the symbol of which you want to create the triangle:- ";
    cout << endl;
    cin >> ch;
    cout << endl;

    for (i = 1; i <= height; i++)
    {
        int value = i;
        for (j = 1; j <= i; j++)
        {
            cout << value << " ";
            value++;
        }
        cout << endl;
    }
    cout << endl;
```
### Right Angled Inverted Counting Triangle Pattern
```
10
9 8 
7 6 5
4 3 2 1
```
code
```
    int height, i, j, val, k;
    char ch;
    cout << endl;
    cout << "Enter height of the triangle:";
    cout << endl;
    cin >> height;
    cout << endl;

    for (i = 1; i <= height; i++)
    {
        for (j = 1; j <= i; j++)
        {
            cout << i - j + 1 << " ";
        }
        cout << endl;
    }
    cout << endl;
```
### Alphabetic Square Pattern
```
A A A A
B B B B
C C C C
D D D D
```
code
```
    int side, i, j;
    char ch = 'A'; //* (For printing same alphabets in the rows)
    cout << endl;
    cout << "Enter side of the square:-";
    cout << endl;
    cin >> side;
    cout << endl;

    for (i = 1; i <= side; i++)
    {
        //! char ch = 'A';   (For Printing continuous aplhabetic order)
        for (j = 1; j <= side; j++)
        {
            cout << ch << " ";
            //! ch++;
        }
        cout << endl;
        ch++;
    }
    cout << endl;
```
### Alphabetic Triangle Pattern
```
A 
B B 
C C C 
D D D D
```
code
```
    int height, i, j;
    char ch = 'A'; //* (For printing same alphabets in the rows)
    cout << endl;
    cout << "Enter height of the triangle:-";
    cout << endl;
    cin >> height;
    cout << endl;

    for (i = 1; i <= height; i++)
    {
        //! char ch = 'A'; // (For Printing continuous aplhabetic order)
        for (j = 1; j <= i; j++)
        {
            cout << ch << " ";
            //! ch++; // (For Printing continuous aplhabetic order)
        }
        cout << endl;
        ch++; //* (For printing same alphabets in the rows)
    }
    cout << endl;
```
### Inverted Alphabetic Triangle Pattern
```
D 
C C 
B B B
A A A A
```
code
```
   int height, i, j;
    char value, ch = 'A';
    cout << endl;
    cout << "Enter height of the triangle:-";
    cout << endl;
    cin >> height;
    cout << endl;

    for (i = 1; i <= height; i++)
    {
        value = ch + height - i;
        for (j = 1; j <= i; j++)
        {
            cout << value << "  ";
            value++;
        }
        cout << endl;
    }
    cout << endl;
```

### Inverted Right Angle Character Triangle Pattern
```
D 
C C 
B B B
A A A A
```
code
```
    int height, i, j, k;
    char ch;
    cout << endl;
    cout << "Enter height of the triangle:";
    cout << endl;
    cin >> height;
    cout << endl;
    cout << "Enter the symbol of which you want to create the triangle:- ";
    cout << endl;
    cin >> ch;
    cout << endl;

    for (i = 1; i <= height; i++)
    {
        for (k = 1; k <= (height - i); k++)
        {
            cout << "  ";
        }
        for (j = 1; j <= i; j++)
        {
            cout << ch << " ";
        }
        cout << endl;
    }
```
### Reverse Right Angle Character Triangle Pattern
```
D 
C C 
B B B
A A A A
```
code
```
    int height, i, j;
    char ch;
    cout << endl;
    cout << "Enter height of the triangle:- ";
    cout << endl;
    cin >> height;
    cout << endl;
    cout << "Enter the symbol of which you want to create the triangle:- ";
    cout << endl;
    cin >> ch;
    cout << endl;

    for (i = 1; i <= height; i++)
    {
        /* for (j = 1; j <= (height - i + 1); j++)
        {
            cout << ch << " ";
        } */
        for (j = height; j >= i; j--)
        {
            cout << ch << " ";
        }
        cout << endl;
    }
```
### Number Pyramid Pattern
```
D 
C C 
B B B
A A A A
```
code
```
   int height, i, j, k, l;
    cout << endl;
    cout << "Enter height of the pyramid:- ";
    cout << endl;
    cin >> height;
    cout << endl;

    for (i = 1; i <= height; i++)
    {
        for (k = 1; k <= (height - i); k++)
        {
            cout << "  ";
        }
        for (j = 1; j <= i; j++)
        {
            cout << j << " ";
        }
        for (l = i - 1; l >= 1; l--)
        {
            cout << l << " ";
        }
        cout << endl;
    }
```
### Dabangg Pattern
```
D 
C C 
B B B
A A A A
```
code
```
  int height, i, j, k, l;
    cout << endl;
    cout << "Enter height of the pattern:- ";
    cout << endl;
    cin >> height;
    cout << endl;

    for (i = 1; i <= height; i++)
    {
        for (j = 1; j <= (height - i + 1); j++)
        {
            cout << j << " ";
        }
        for (k = 1; k <= (i - 1); k++)
        {
            cout << "* ";
        }
        for (k = (i - 1); k >= 1; k--)
        {
            cout << "* ";
        }
        for (l = (height - i + 1); l >= 1; l--)
        {
            cout << l << " ";
        }
        cout << endl;
    }
```

