const isAllDivisible = (n: number, max_div: number): boolean => {

	for(let i: number = 1; i <= max_div; i++){

		if(n%i != 0){
			return false
		}

	}

	return true
}

const checkSmallestMultiple = (max_div: number): number => {

	let counter: number = max_div
	let smallest_multiple: number = 0
	let all_divisible: boolean = false
	
	while(!all_divisible){

		all_divisible = isAllDivisible(counter, max_div)

		smallest_multiple = (all_divisible) ? counter : 0
		
		counter += max_div
	}

	return smallest_multiple
}

export { checkSmallestMultiple }
