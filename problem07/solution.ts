import { isPrime } from '../utils'

const getPrime = (pos: number): {} => {
	let prime: number = 0
	let num_primes: number = 0
	let num_check: number = 2

	if (pos >= 1) {

		while (num_primes != pos) {

			if (isPrime(num_check)) {
				prime = num_check
				num_primes++
			}

			num_check++
		}


	} else {
		return 'The position need to be bigger then 0'
	}

	return prime
}

export { isPrime, getPrime }
