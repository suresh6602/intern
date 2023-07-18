const swapName = (name) => {
    const nameArray = name.split('');
  
    for (let i = 0; i < nameArray.length; i += 3) {
      if (i + 1 < nameArray.length) {
        [nameArray[i], nameArray[i + 1]] = [nameArray[i + 1], nameArray[i]];
      }
    }
  
    return nameArray.join('');
  };
  
  const name = "NAVADHITI";
  const swappedName = swapName(name);
  console.log(swappedName); // Output: "ANVDAHTII"
  