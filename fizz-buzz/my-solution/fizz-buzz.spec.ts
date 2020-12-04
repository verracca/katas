import { doFizzBuzz } from './fizz-buzz'

describe('doFizzBuzz', () => {
  it('Given 0 should return a empty list', () => {
    const given = 0
    const actual = doFizzBuzz(given)
    expect(actual).toEqual([])
  })
})

describe('doFizzBuzz', () => {
  it('should contain the qty of elem of the number', () => {
    const given = 5
    const actual = doFizzBuzz(given)
    expect(actual.length).toBe(5)
  })
})

describe('doFizzBuzz', () => {
  it('should replace with fizz the num divisible by 3 and buzz the num divisible by 5', () => {
    const given = 5
    const actual = doFizzBuzz(given)
    expect(actual).toEqual([1, 2, 'fizz', 4, 'buzz'])
  })
})

describe('doFizzBuzz', () => {
  it('should replace with fizzbuzz when the num is divisible by 3 and 5', () => {
    const given = 15
    const actual = doFizzBuzz(given)
    expect(actual).toEqual([
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz'
    ])
  })
})
