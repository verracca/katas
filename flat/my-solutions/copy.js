export function copy(...arrays) {
  const result = []
  for (const array of arrays) {
    result.push(...array)
  }

  return result

  //retrun array.flat(Infinity)
  //return [...arrays[0], ...(arrays[1] ?? []), ...(arrays[2] ?? [])]
}
