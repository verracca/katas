import { filterEven } from './filter-even-numbers'

describe('filterEven', () => {
  it('should filter even', () => {
    const given = [1, 2, 5, 7, 8]

    const actual = filterEven(given)

    expect(actual).toEqual([2, 8])
  })
})
