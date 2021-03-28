import { isPalindrome } from '../utils'

const palindronMaker = (digits: number): number | string => {

	let palindrome: number = 0
	let max_palidrome: number = 0
	let was_palindrome: boolean = false
	
	if (digits > 1) {

		switch (digits) {

			default:
			case 2:
				for(let x: number = 99; x >= 10; x--){
					for(let y: number = 99; y >= 10; y--){
						palindrome = x * y
						if(isPalindrome(palindrome)){
							was_palindrome = true
							max_palidrome = (palindrome > max_palidrome) ? palindrome : max_palidrome
							break
						}
					}
				}
			break

			case 3:
				for(let x: number = 999; x >= 100; x--){
					for(let y: number = 999; y >= 100; y--){
						palindrome = x * y
						if(isPalindrome(palindrome)){
							max_palidrome = (palindrome > max_palidrome) ? palindrome : max_palidrome
							break
						}
					}
				}
			break

			case 4:
				for(let x: number = 9999; x >= 1000; x--){
					for(let y: number = 9999; y >= 1000; y--){
						palindrome = x * y
						if(isPalindrome(palindrome)){
							max_palidrome = (palindrome > max_palidrome) ? palindrome : max_palidrome
							break
						}
					}
				}
			break
		}

		

	} else {
		return 'The num of digits need to be bigger then 1'
	}

	return max_palidrome
}

export { palindronMaker }
