function mergeArrays(myArray, alicesArray) {

  // Combine the sorted arrays into one large sorted array
  // const newArray = myArray.concat(alicesArray)
  // return newArray.sort()

    let mergedArray = []
    let myIndex = 0
    let alicesIndex = 0
    let mergedIndex = 0

      while (mergedArray.length < myArray.length + alicesArray.length) {

      if (myArray.length <= 0) {
        return alicesArray
      } else if (alicesArray.length <= 0) {
        return myArray
      } else {
      if (myArray[myIndex] > alicesArray[alicesIndex] || !myArray[myIndex]) {
        mergedArray[mergedIndex] = alicesArray[alicesIndex]
        alicesIndex += 1
        mergedIndex += 1
      } else {
        mergedArray[mergedIndex] = myArray[myIndex]
        myIndex += 1
        mergedIndex += 1
      }
    }
  }
  return mergedArray
}

