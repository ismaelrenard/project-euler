const isPrimeFactor = (num_check: number, factor: number): boolean => {

	if (num_check % factor == 0) {
		return true
	} else {
		return false
	}

}

interface IPrimeFactors {
	prime_factors: number[],
	largest_prime: number,
	msg: string
}

const primeFactors = (n: number): IPrimeFactors => {

	let prime_factors: number[] = []
	let num_check: number = n
	let largest_prime: number = 0
	let msg: string = ''

	if (num_check > 1) {

		for (let factor: number = 2; factor <= num_check; factor++) {

			// if (isPrimeFactor(num_check, factor)) {
			// 	num_check = num_check / factor
			// 	largest_prime = factor
			// 	console.log(`factor: ${factor} - ${num_check}`)
			// }

			while (isPrimeFactor(num_check, factor)) {
				prime_factors.push(factor)
				num_check = num_check / factor
				largest_prime = factor
			}

		}

		if (!largest_prime) {
			msg = 'This is a prime number and dont have prime factors'
		}

	} else {
		msg = 'The number need to be bigger then 1'
	}

	return { prime_factors, largest_prime, msg }
}

export { primeFactors }
