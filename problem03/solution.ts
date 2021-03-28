const isPrimeFactor = (num_check: number, factor: number): boolean => {

    if(num_check%factor == 0) {
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
    let largest_prime: number = 2
    let msg: string = ''

    if(num_check > 1){

        for(let factor: number = 2; factor*factor < n; factor++) {

            if(isPrimeFactor(num_check,factor)){
                num_check = num_check/factor
                largest_prime = factor
            }

            // while(isPrimeFactor(num_check,factor)){
            //     prime_factors.push(factor)
            //     num_check = num_check/factor
            //     largest_prime = factor
            // }

        }
        
    } else {
        msg = 'The number need to be bigger then 1'
    }

    return {prime_factors, largest_prime, msg}
}

export { primeFactors }
