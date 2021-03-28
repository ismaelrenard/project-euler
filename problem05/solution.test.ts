import { checkSmallestMultiple } from './solution'

describe('Project Euler: Problem 5', () => {


	test('smallest number that can be divided by each of the numbers from 1 to 5', () => {

		expect(checkSmallestMultiple(5)).toEqual(60)

	})

	test('smallest number that can be divided by each of the numbers from 1 to 10', () => {

		expect(checkSmallestMultiple(10)).toEqual(2520)

	})

	test('smallest number that can be divided by each of the numbers from 1 to 20', () => {

		expect(checkSmallestMultiple(20)).toEqual(232792560)

	})

})
