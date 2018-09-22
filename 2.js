const x = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

let elem = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        let a = arr[i];
        if(typeof a === 'object') {
            sum += elem(a);
        }
        else {
                sum += a;
        }
    }
    return sum;
};

console.log(elem(x));

