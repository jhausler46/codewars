function squareSum(numbers){
    let sum = 0
    numbers.forEach(x => {
        let square = x*x
        sum+=square
    })
    return sum    
}