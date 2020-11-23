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
