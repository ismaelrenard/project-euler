
interface IFibo {
    fibo_list: number[],
    sum: number
}

const evenSumFibonacci = (): IFibo => {

    let fibo_limit: number = 4000000
    let fibo_list: number[] = []
    let fibo_next: number = 1
    let fibo_current: number = 1
    let fibo_prev: number = 1
    let sum: number = 0

    while (fibo_limit > fibo_next) {
        fibo_list.push(fibo_next)
        sum = (fibo_next%2 == 0) ? sum + fibo_next : sum
        fibo_next = fibo_prev + fibo_current
        fibo_prev = fibo_current
        fibo_current = fibo_next
    }

    return {fibo_list, sum}
}

export { evenSumFibonacci }
