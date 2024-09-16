const parameterize = (str) => {
    return str
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')  // Remove non-word characters except spaces and hyphens
      .replace(/\s+/g, '-')      // Replace spaces with hyphens
      .replace(/-+/g, '-');       // Remove consecutive hyphens
  };
  
  // Example usage
  console.log(parameterize("Hello World"));           // Output: "hello-world"
  console.log(parameterize("This is a Test"));       // Output: "this-is-a-test"
  console.log(parameterize("JavaScript & HTML"));    // Output: "javascript-html"
  