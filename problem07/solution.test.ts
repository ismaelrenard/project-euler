import { isPrime } from '../utils'
import { getPrime } from './solution'

describe('Project Euler: Problem 7', () => {

  test('check is prime', () => {

    expect(isPrime(541)).toBe(true)
    
  })

  test('cant test colocation minor then 1', ()=> {
    expect(getPrime(0)).toEqual('The position need to be bigger then 0')
  })

  test('check what is 6th prime', ()=> {
    expect(getPrime(6)).toEqual(13)
  })

  test('check what is 100 prime', ()=> {
    expect(getPrime(100)).toEqual(541)
  })

  test('check what is 10001 prime', ()=> {
    //expect(getPrime(10001)).toEqual(104743)
  })

})
