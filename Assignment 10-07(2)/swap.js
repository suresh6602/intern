function swapKeysAndValues(obj) {
    var swappedObj = {};
    for (var key in obj) {
      swappedObj[obj[key]] = key;
    }
    return swappedObj;
  }
  
  var student = { name: "Jose", dept: "Computer Science", year: 3 };
  var result = swapKeysAndValues(student);
  console.log(result);
  