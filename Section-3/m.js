function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }
  let user_input = parseInt(prompt("Enter a number, please:"));
  
  if (!isNaN(user_input)) {
    let primeNumbers = [];
    for (let i = 2; i <= user_input; i++) {
      if (isPrime(i)) {
        primeNumbers.push(i);
      }
    }
    
    if (primeNumbers.length > 0) {
      alert("Prime numbers up to " + user_input + ":\n" + primeNumbers.join(" "));
    } else {
      alert("There are no prime numbers up to " + user_input + ".");
    }
  } else {
    alert("Invalid input. Please enter a valid number.");
  }
  