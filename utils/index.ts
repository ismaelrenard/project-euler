const isPrime = (n: number): boolean => {

	for (let i: number = 2; i <= Math.floor(n / 2); i++) {

		if (n % i == 0) {
			return false
		}

	}

	return true
}

const isPalindrome = (n: number): boolean => {

	const stringNum = n.toString()

	if ((stringNum.length) % 2 == 0) {

		const s1 = stringNum.slice(0, (stringNum.length / 2))
		const s2 = stringNum.slice(-(stringNum.length / 2)).split('').reverse().join('')

		if (s1 === s2) return true

	}

	return false

}

export { isPrime, isPalindrome }
