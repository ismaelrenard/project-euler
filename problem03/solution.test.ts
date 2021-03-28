import { primeFactors } from './solution'

describe('Project Euler: Problem 3', () => {

  test('What is the largest prime factor for 13195', ()=> {
    
    const {largest_prime} = primeFactors(13195)

    expect(largest_prime).toEqual(29)

  })

  test('What is the largest prime factor for 600851475143', ()=> {
    
    const {largest_prime} = primeFactors(600851475143)

    expect(largest_prime).toEqual(6857)
    
  })

})
