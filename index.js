// 1.  create a function that merges two sorted arrays, and returns a new array sorted

// GAMEPLAN
 // have a pointer to compare the first element of arr1 
  // have another pointer to compare the first element of arr2

  // if first element of arr1 < first element of arr2 --- push that element to return arr

  // pointer of arr1 to move up a element while still comparing to first element of arr2
  // only move pointer for each if element is removed



//2.  Do a mergeSort for an unsorted array using the merge function created


function merge(arr1, arr2) {
  let pter1 = 0
  let pter2 = 0
  let returnArr = []

  while(pter1 < arr1.length && pter2 < arr2.length){
    if(arr1[pter1] < arr2[pter2]){
      returnArr.push(arr1[pter1])
      pter1 ++
    } else {
      returnArr.push(arr2[pter2])
      pter2 ++
    }
  }

  while(pter1 < arr1.length){
    returnArr.push(arr1[pter1])
    pter1++
  }

  while(pter2 < arr2.length){
    returnArr.push(arr2[pter2])
    pter2++
  }
 
  return returnArr
}


function mergeSort(arr) {
  // base case
  if(arr.length <= 1) {
    return arr
  }
  // Break array into half
  let half = Math.floor(arr.length / 2)

  // left half
  let left = mergeSort(arr.slice(0, half))

  // right half
  let right = mergeSort(arr.slice(half))
  
  // merge and sort broken down array
  return merge(left, right)
}


mergeSort([1,10,99,2,3,22,10,0])








// merge([1,3,5], [2,4,6,8,10])