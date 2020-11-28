export function theHighestNumber(array) {
  let num = array[0]

  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    if (element >= num) {
      num = element
    }
  }

  return num
}
