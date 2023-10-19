function sortArrayDescending(array) {

    array.sort(function(a, b) {
      return b - a;
    });
    
    return array;
  }
  
  const input = prompt("Enter a comma-separated list of numbers:");
  const inputArray = input.split(",").map(Number);
  
  const sortedArray = sortArrayDescending(inputArray);
  
  console.log(sortedArray);