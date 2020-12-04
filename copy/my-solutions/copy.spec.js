import { copy } from './copy.js'

describe('copy', () => {
  it('should recibe multiple arrays', () => {
    const given = [1, 2]

    const actual = copy(given)

    expect(actual).toEqual([1, 2])
  })
  it('should group the arrays in one array', () => {
    const given = [
      [1, 2],
      [3, 5],
      [6, 7]
    ]

    const actual = copy(...given)

    expect(actual).toEqual([1, 2, 3, 5, 6, 7])
  })
})
