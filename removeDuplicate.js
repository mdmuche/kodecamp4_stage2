function removeDuplicate(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    //? either of both cases work
    // case 1
    // if (!uniqueArray.includes(arr[i])) {
    //   uniqueArray.push(arr[i]);
    // }

    // case 2
    if (arr[i] !== arr[i + 1]) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

console.log(removeDuplicate([1, 2, 2, 3, 3, 3, 4, 5, 5]));
