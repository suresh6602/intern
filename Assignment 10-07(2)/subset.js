function getSubsets(str) {
    var subsets = [];
    for (var i = 0; i < str.length; i++) {
        console.log();
      for (var j = i + 1; j <= str.length; j++) {
        subsets.push(str.slice(i, j));
        console.log();
      }
    }
    return subsets;
  }
  
  var sampleData = "cake";
  var result = getSubsets(sampleData);
  console.log(result);
  