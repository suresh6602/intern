const swapCase = (str) => {
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (char === char.toUpperCase()) {
        result += char.toLowerCase();
      } else {
        result += char.toUpperCase();
      }
    }
  
    return result;
  };
  
  // Example usage
  console.log(swapCase("Hello World"));  // Output: "hELLO wORLD"
  console.log(swapCase("JavaScript"));  // Output: "jAVASCRIPT"
  console.log(swapCase("aBcDeF"));      // Output: "AbCdEf"
  