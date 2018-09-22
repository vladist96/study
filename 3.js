const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let elem = (n, i) => {
    let j = i || 0;
    if (j !== n.length-1) {
        console.log(n[j]);
        elem(n, j+1);
    } else {
    console.log(n[j])
    }
};

elem(x);