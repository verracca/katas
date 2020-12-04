export function doFizzBuzz(number: number) {
  const myArray = []

  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      myArray.push('fizzbuzz')
    } else if (i % 3 === 0) {
      myArray.push('fizz')
    } else if (i % 5 === 0) {
      myArray.push('buzz')
    } else {
      myArray.push(i)
    }
  }

  return myArray
}
