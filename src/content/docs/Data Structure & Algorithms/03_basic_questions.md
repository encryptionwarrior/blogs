---
title: Basic Questions
description: A guide in my new Starlight docs site.
---


## Print number from 1 to n
```
int main() {
    int n;
    cin>>n;
    int i = 1;
    while(i<=n) {
        cout<<i<<" ";
        i = i+1;   
    }
}
```
## Print sum of number from 1 to n
```
int main() {
   int n;
    cin >> n;
    int i = 1;
    int sum = 0;
    while(i<=n) {
        sum = sum + i;
        i = i + 1;
    }
    cout<< "value of sum is "<<sum<<endl;
}
```
## Find sum of all even number from 1 to n
```
int main() {
   int n;
    cin >> n;
    int i = 1;
    int sum = 0;
    while(i<=n) {
        sum = sum + i;
        i = i + 1;
    }
    cout<< "value of sum is "<<sum<<endl;
}
```
## Convert fahrenheit to celcius
```
int main() {
   int n;
    cin >> n;
    int i = 1;
    int sum = 0;
    while(i<=n) {
        sum = sum + i;
        i = i + 1;
    }
    cout<< "value of sum is "<<sum<<endl;
}
```
## Convert fahrenheit to celcius
```
int main() {
   int n;
    cin >> n;
    int i = 1;
    int sum = 0;
    while(i<=n) {
        sum = sum + i;
        i = i + 1;
    }
    cout<< "value of sum is "<<sum<<endl;
}
```
## Find all prime number from 1 to n
```
int main() {
   int n;
    cin >> n;
    int i = 1;
    int sum = 0;
    while(i<=n) {
        sum = sum + i;
        i = i + 1;
    }
    cout<< "value of sum is "<<sum<<endl;
}
```
## Check given number is prime or not
```
int main() {
   int n;
    cin >> n;
    int i = 1;
    int sum = 0;
    while(i<=n) {
        sum = sum + i;
        i = i + 1;
    }
    cout<< "value of sum is "<<sum<<endl;
}
```

## Print fibonacci series of numbers from 1 to n
```
 int n = 10;

    int a = 0;
    int b = 1;
    cout<<a <<" " <<b<<" ";
    for(int i = 1; i<=n; i++ ) {
        
        int nextNumber = a+b;
        cout<<nextNumber<<" ";

        a = b;
        b = nextNumber;
    }
```
## Subtract product and sum from given number 1 to n.
```
  int subtractProductAndSum(int n) {
        int prod = 1;
        int sum = 0;
        while(n!=0) { 
            int digit = n%10;
            prod = prod * digit;
            sum = sum + digit;  
            n = n/10;
        }
        int answer = prod - sum;
        return answer;
    }
```
## Convert Binary to Decimal
```
   int n;
    cin >> n;
    int i = 0, ans = 0 ;
    while( n != 0) {
        int digit = n % 10;
        if( digit == 1) {
            ans = ans + pow(2, i);
        }
        n = n/10;
        i++;
    }
    cout<< ans << endl;
```
## Convert Decimal to Binary
```
    int n;
    cin >> n;
    int ans  = 0;
    int i = 0;
    while(n != 0 ) {
        int bit  = n & 1;
        ans = (bit * pow(10, i) ) + ans;
        n = n >> 1;
        i++;
    }
    cout<<" Answer is " << ans << endl;
```


## Reverse Integer
```
    int reverse(int x) {
        int ans  = 0;
        while( x != 0) {
            int digit = x % 10;
            
            if( (ans > INT_MAX/10) || (ans < INT_MIN/10)) {
                return 0;
            }
            ans = (ans * 10) + digit;
            x = x / 10; 
        }
        return ans;
    }
```

## Reverse Integer
```
    int reverse(int x) {
        int ans  = 0;
        while( x != 0) {
            int digit = x % 10;
            
            if( (ans > INT_MAX/10) || (ans < INT_MIN/10)) {
                return 0;
            }
            ans = (ans * 10) + digit;
            x = x / 10; 
        }
        return ans;
    }
```
## Check given number is power of 2 or not
```
    bool isPowerOfTwo(int n) {
        int ans = 1;
        for(int i = 0; i <= 30; i++) {
            
            //cout<<" ans "<<ans <<endl;
            if(ans == n)
            {
                return true;
            }
            if(ans < INT_MAX/2)
            ans = ans * 2;   
            
        }
        return false;
    }
```
## Compliment of base 10 Ineteger
```
   int bitwiseComplement(int n) {   
        int m = n;
        int mask = 0;
        if(n == 0)
            return 1;
        
        while( m!=0) {
            mask = (mask << 1) | 1;
            m = m >> 1;
        }
        int ans = (~n) & mask;
        return ans; 
    }
```
## Find m<sup>n</sup> power 
```
  int power(int num1, int num2) {
    //cout << a <<endl;
    int ans = 1;
    for(int i = 1; i <= num2; i++) {
        ans = ans * num1;
    }
    return ans;
}
```
## Calculate Combination (nCr) Using Factorial
```
int factorial(int n) {
    int fact = 1;
    for(int i = 1; i<=n; i++ ) {
        fact = fact * i;
    }
    return fact;
}
int nCr(int n, int r) {
    int num = factorial(n);
    int denom = factorial(r) * factorial(n-r);
    return num/denom;
}
int main( ) {
    int n, r;
    cin>> n >> r ;
    cout <<" Answer is " << nCr(n,r) << endl;
    return 0;
}
```
## Check given number is even or odd
```
bool isEven(int a) {
    //odd
    if(a&1) {
        return 0;
    }
    else { //Even
        return 1;
    }
}
```
## Check given number is even or odd
```
bool isEven(int a) {
    //odd
    if(a&1) {
        return 0;
    }
    else { //Even
        return 1;
    }
}
```
## Print count numbers for n
```
void printCounting(int num) {
//    cout << n << endl;
    //Function Body 
    for(int i=1; i<=num; i++) {
        cout<< i << " ";
    }
    cout<<endl;
}
```
## Make a basic calculator
```
 int a, b;
    cout <<" Enter the value of a "<<endl;
    cin >> a;
    cout<<" Enter the value of b " <<endl;
    cin >> b;
    char op;
    cout<<" Enter the Operation you want to perform" <<endl;
    cin >> op;
    switch( op ) {
        case '+':  cout << (a+b) <<endl; 
                  break;
        case '-': cout<< (a-b) <<endl;
                  break;  
        case '*': cout<< (a*b) <<endl;
                  break;
        case '/': cout<< (a/b) <<endl;
                  break;
        case '%': cout<< (a%b) <<endl;
                  break;
        default: cout << "Please enter a valid Operation " << endl;

    }
  
```

