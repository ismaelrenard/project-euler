import { evenSumFibonacci } from './solution'

describe('Project Euler: Problem 2', () => {

  test('sum of the even-valued in the Fibonacci sequence whose values do not exceed four million', ()=> {
    
    const { sum } = evenSumFibonacci()

    expect(sum).toEqual(4613732)

  })

})
