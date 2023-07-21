function isValidEmail(email) {
    const regex = /^[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]+(?:[.,][A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]+)*@[A-Za-z0-9]+(?:\.[A-Za-z0-9]+)*$/;
    return regex.test(email);
  }
  
  // Test the program with some examples
  console.log(isValidEmail(",test.@gmail.com")); // Output: true
  console.log(isValidEmail("hello.world@example.com")); // Output: true
  console.log(isValidEmail("user123@example")); // Output: true
  console.log(isValidEmail("user-123@example.co.uk")); // Output: true
  console.log(isValidEmail("user@exa=mple.com")); // Output: false