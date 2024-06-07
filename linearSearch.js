function linearSearch(stringsArr, targetElement) {
  for (let i = 0; i < stringsArr.length; i++) {
    if (stringsArr[i] == targetElement) {
      console.log("Yes, the string exists in the array");
      return;
    }
  }

  return console.log("No, the string does not exist in the array");
}

linearSearch(["cat", "dog", "rat", "elephant"], "dog");
// linearSearch(["cat", "dog", "rat", "elephant"], "nkita");
