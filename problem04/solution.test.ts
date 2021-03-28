import { isPalindrome } from '../utils'
import { palindronMaker } from './solution'

describe('Project Euler: Problem 4', () => {

	test('check is palindrome', () => {

		expect(isPalindrome(1001)).toBe(true)
		expect(isPalindrome(7070)).toBe(false)
		expect(isPalindrome(208802)).toBe(true)
		
	  })

	test('the largest palindrome 2 digits', () => {

		expect(palindronMaker(2)).toBe(9009)

	})

	test('the largest palindrome 3 digits', () => {

		expect(palindronMaker(3)).toBe(906609)

	})

})
