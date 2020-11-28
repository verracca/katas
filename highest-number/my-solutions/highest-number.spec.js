import { theHighestNumber } from './highest-number'

describe('highestNumber', () => {
  it('should get the highest number of an array of two numbers', () => {
    const given = [0, 1]

    const actual = theHighestNumber(given)

    expect(actual).toBe(1)
  })
  it('should return the highest number of an array when it has 2 equal numbers', () => {
    const given = [5, 1, 6, 5]

    const actual = theHighestNumber(given)

    expect(actual).toBe(6)
  })
  it('should return the highest number of an array when it has negative numbers', () => {
    const given = [-3, -2, -1]

    const actual = theHighestNumber(given)

    expect(actual).toBe(-1)
  })
})
