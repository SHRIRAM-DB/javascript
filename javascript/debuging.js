function printTriangle(n) {
    let row = '';
    for (let i = 1; i <= n; i++) {
            row += '*';
        console.log(row);
    }
}

// Example usage
let n = 5;
printTriangle(n);

function isPrime(num) {
    prime=true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) { 
            return false;
            break;
        }
    }
    if (prime) {
        return true;
    }
    
}

// Example usage
let num = 9;
console.log(isPrime(num));

function printHollowSquare(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n; j++) {
            if (i === 1 || i === n || j===1 || j===n) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}

// Example usage
n = 5;
printHollowSquare(n);

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b; 
        a = temp;  
    }
    return a;
}

// Example usage
let a = 48, b = 18;
console.log(gcd(a, b));