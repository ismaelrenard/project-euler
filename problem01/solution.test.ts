import { checkMultiples } from './solution'

describe('Project Euler: Problem 1', () => {

  test('check multiples', () => {

    expect(checkMultiples(-1)).toEqual('The number need to be bigger then 1')
    expect(checkMultiples(2)).toEqual(0)
    expect(checkMultiples(10)).toEqual(23)
    expect(checkMultiples(100)).toEqual(2318)
    expect(checkMultiples(1000)).toEqual(233168)

  })

})
