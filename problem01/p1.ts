export function checkMultiples(n: number): number | string {
    let sum: number = 0

    if(n >= 1){
        for(let i: number = 1; i < n; i++) {
            sum += (i%3 == 0 || i%5 == 0) ? i : 0
        }
    } else {
        return 'The number need to be bigger then 1'
    }

    return sum
}